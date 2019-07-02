import React from 'react';
import { Row } from 'reactstrap';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Table } from 'reactstrap';

import Page from '../components/Page';
import Project from '../pages/Project';

const SearchFilterMode = {
  All: 1,
  ProjectName: 2,
  GroupMembers: 3,
  Keyword: 4
}


class Projects extends React.Component {

  state = { 
    isLoaded: false,
    projects: [],
    searchFilter: '',
    searchFilterMode: SearchFilterMode.All,
    filterDropdownOpen: false,
    termDropdownOpen: false,
    selectedProject: null,
  }

  fetchWithTimeout = (url, options, timeout = 3000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout( () => reject(new Error('timeout')), timeout)
      )
    ]);
  }

  toggleFilterDropdown = () => this.setState({filterDropdownOpen: !this.state.filterDropdownOpen});

  toggleTermDropdown = () => this.setState({termDropdownOpen: !this.state.termDropdownOpen});


  componentDidMount() {
    // this.fetchWithTimeout('http://10.171.204.211/projects/', {}, 3000)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     this.setState( { isLoaded: true, projects: json.results, })
    //   })
    //   .catch(err => {
    //     console.log("looks like the backend is being worked on");
        this.setState({ isLoaded: true,
                        projects: [
                          { ProjectName: "Super Mario",
                            Term: "Spring",
                            Year:"1996",
                            GroupMembers: "Mario, Luigi, Toad, Princess Peach, ShyGuy"
                          },
                          { ProjectName: "Bernie",
                            Term: "Fall",
                            Year: "2020",
                            GroupMembers: "Bernie Sanders, Jane O'Meara Sanders, James McDowell, John Freeman, Sabrina America"
                          },
                          { ProjectName: "Remus' Big Adventure",
                            Term: "Fall",
                            Year: "2017",
                            GroupMembers: "Remus Lupin, Big Black, Meow Meow, Gato Dali, Fat Kitty"
                          },
                          { ProjectName: "VIBA",
                            Term: "Fall",
                            Year: "2017",
                            GroupMembers: "Jamhson Boliva, Melissa Gramajo, DaQueshia Irvin, Jesus Menacho"
                          },
                          { ProjectName: "Autonomous Drone",
                            Term: "Fall",
                            Year: "2017",
                            GroupMembers: "Marco van Hilst, Ryan Beasley, Daniel Belalcazar, Matthew Taubler"
                          },
                          { ProjectName: "Tabletop Gaming Companion",
                            Term: "Fall",
                            Year: "2017",
                            GroupMembers: "Michael Garro, Jeremy Kramer, Andrew Maida, Austin Shipley"
                          },
                          { ProjectName: "Northrop Microgravity (Green Team)",
                            Term: "Fall",
                            Year: "2017",
                            GroupMembers: "Joseph Freeman, Allen Shearin, StillNo ThirdPerson"
                          }
                      ] 
                });
      //});
  }

  updateSearchFilter = evt => this.setState({searchFilter: evt.target.value});


  render() {

    if (this.state.selectedProject) {
      return <Project project={this.state.selectedProject}> </Project>;
    }

    let { isLoaded, projects, searchFilter, searchFilterMode } = this.state;

    let filterString = "";

    if (searchFilterMode === SearchFilterMode.All)
      filterString = "All";
    else if (searchFilterMode === SearchFilterMode.ProjectName)
      filterString = "Project Name";
    else if (searchFilterMode === SearchFilterMode.GroupMembers)
      filterString = "Group Members";
    else if (searchFilterMode === SearchFilterMode.Keyword)
      filterString = "Keyword";

    let projectList = <></>;


   let createRowForTable = (project, index) =>
      <>
        <tr key={index} onClick={() => this.setState({selectedProject: project})}>
          <td>
            {project.ProjectName}
          </td>
          <td>
            {project.GroupMembers}
          </td>
          <td xs="2" className="text-right">
            {project.Term} {project.Year}
          </td>
        </tr>
      </>;


    if (searchFilter) {
      if (searchFilterMode === SearchFilterMode.ProjectName)
        projects = projects.filter(project => project.ProjectName.toLowerCase().includes(searchFilter.toLowerCase()));
      else if (searchFilterMode === SearchFilterMode.GroupMembers)
        projects = projects.filter(project => project.GroupMembers.toLowerCase().includes(searchFilter.toLowerCase()));
      else if (searchFilterMode === SearchFilterMode.All)
        projects = projects.filter(project => project.ProjectName.toLowerCase().includes(searchFilter.toLowerCase())
                                              || project.GroupMembers.toLowerCase().includes(searchFilter.toLowerCase()));

    }
    
    if (isLoaded) {
      projectList = (
          <Table hover>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Group Members</th>
                <th>Term</th>
              </tr>
            </thead>

            <tbody>
              {projects.map(createRowForTable)}
            </tbody>
          </Table>
      );
    }

    return <>
      <Page>
        <Row>
          <h2 className="mb-4">Projects</h2> 
          <Form className="ml-auto" inline>
            <Input name="search" placeholder="Search projects" value={this.state.searchFilter} onChange={evt => this.updateSearchFilter(evt)} />
            <Dropdown isOpen={this.state.filterDropdownOpen} toggle={this.toggleFilterDropdown}>
              <DropdownToggle caret id="project-search-button" >
                Search: <b>{filterString}</b>
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => this.setState({searchFilterMode: SearchFilterMode.All})} active={searchFilterMode === SearchFilterMode.All}>All</DropdownItem>
                  <DropdownItem onClick={() => this.setState({searchFilterMode: SearchFilterMode.ProjectName})} active={searchFilterMode === SearchFilterMode.ProjectName}>Project Name</DropdownItem>
                  <DropdownItem onClick={() => this.setState({searchFilterMode: SearchFilterMode.GroupMembers})} active={searchFilterMode === SearchFilterMode.GroupMembers}>Group Members</DropdownItem>
                  <DropdownItem onClick={() => this.setState({searchFilterMode: SearchFilterMode.Keyword})} active={searchFilterMode === SearchFilterMode.Keyword}>Keyword</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={this.state.termDropdownOpen} toggle={this.toggleTermDropdown}>
              <DropdownToggle caret id="project-search-button" >
                Term: 
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>2019</DropdownItem>
                  <DropdownItem>2018</DropdownItem>
                  <DropdownItem>2017</DropdownItem>
                  <DropdownItem>2016</DropdownItem>
                </DropdownMenu>
            </Dropdown>
          </Form>
        </Row>
     
        {projectList}
        
      </Page>
    </>
  }
}

export default Projects;