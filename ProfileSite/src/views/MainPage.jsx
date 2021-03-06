/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Progress,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbarMin from "components/Navbars/ExamplesNavbarMin.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/pet-adoption.png"),
    altText: "Slide 1",
    caption: "Pet Adoption Web Platform"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbarMin />
        <div className='wrapper'>
          <div className='page-header'>
            <img
              alt='...'
              className='dots'
              src={require("assets/img/dots.png")}
            />
            <img
              alt='...'
              className='path'
              src={require("assets/img/path1.png")}
            />
            <Container className='align-items-center'>
              <Row>
                <Col lg='6' md='6'>
                  <h1 className='profile-title text-left'>
                    Doğukan Berat KARATAŞ
                  </h1>
                  <h5 className='text-on-back'>01</h5>
                  <br />
                  <p className='profile-description'>
                    Hacettepe Üniversitesi Bilgisayar Mühendisliği bölümü 4.
                    sınıf öğrencisiyim. 1. sınıftan itibaren Java ile
                    ilgileniyorum. Kendimi de bu alanda geliştirmek istiyordum.
                    3. sınıfta 5. kişilik bir proje grubu ile geliştirdiğim
                    "Online E-Ticaret Sitesi" projesi sayesinde Web
                    Geliştiriciliği alanına ilgim olduğunu fark ettim ve bu
                    alanda projeler geliştirmeye başladım.
                  </p>
                  <div className='btn-wrapper profile pt-3'>
                    <Button
                      className='btn-icon btn-round'
                      color='success'
                      href='https://www.hackerrank.com/Berat_KARATAS'
                      id='tooltip639225725'
                      target='_blank'
                    >
                      <i class='fas fa-heading'></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target='tooltip639225725'>
                      Hackerrank
                    </UncontrolledTooltip>
                    <Button
                      className='btn-icon btn-round'
                      color='info'
                      href='https://www.linkedin.com/in/berat-karatas/'
                      id='tooltip982846143'
                      target='_blank'
                    >
                      <i class='fab fa-linkedin'></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target='tooltip982846143'>
                      LinkedIn
                    </UncontrolledTooltip>
                    <Button
                      className='btn-icon btn-round'
                      color='default'
                      href='https://github.com/BeratKARATAS53'
                      id='tooltip951161185'
                      target='_blank'
                    >
                      <i className='fab fa-github' />
                    </Button>
                    <UncontrolledTooltip delay={0} target='tooltip951161185'>
                      Github
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className='ml-auto mr-auto' lg='4' md='6'>
                  <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid rounded-circle'
                        src={require("assets/img/profile1.jpg")}
                      />
                      <h4 className='title'>Kişisel Bilgiler</h4>
                    </CardHeader>
                    <CardBody>
                      <TabContent
                        className='tab-subcategories'
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId='tab1'>
                          <h5>
                            <i class='fas fa-envelope'></i>
                            {"  "}
                            007berat.karatas@gmail.com
                          </h5>
                          <h5>
                            <i class='fas fa-phone-square'></i> 05556505863
                          </h5>
                          <h5>
                            <i class='fas fa-calendar-alt'></i> 23 Yaşındayım
                          </h5>
                          <h5>
                            <i class='fas fa-map-marker-alt'></i> Kazım Orbay
                            Mahallesi, 339.Sokak, No:18/8, Akdere/Mamak/ANKARA
                          </h5>
                          <h5>
                            <i class='fas fa-car'></i> B
                          </h5>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='section'>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt='...'
                className='path'
                src={require("assets/img/path2.png")}
                style={{ height: 400 }}
              />
            </div>
            <Container>
              <Row className='justify-content-center'>
                <Col md='8'>
                  <h1 className='profile-title text-left'>Eğitim</h1>
                  <h5 className='text-on-back'>02</h5>
                  <br />
                  <Table responsive style={{ fontSize: 15 }}>
                    <tbody>
                      <tr>
                        <td>
                          Lisans
                          <br />
                          2015 - Şuan
                        </td>
                        <td>
                          <i
                            class='fas fa-graduation-cap'
                            style={{ paddingLeft: 30, paddingRight: 30 }}
                          ></i>
                        </td>
                        <td>
                          Hacettepe Üniversitesi - Bilgisayar Mühendisliği
                          <br />
                          GAO: 2.94 / 4
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lise
                          <br />
                          2011 - 2015
                        </td>
                        <td>
                          <i
                            class='fas fa-graduation-cap'
                            style={{ paddingLeft: 30, paddingRight: 30 }}
                          ></i>
                        </td>
                        <td>
                          Çağrıbey Anadolu Lisesi
                          <br />
                          GAO: 88.53 / 100
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='section'>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <img
                alt='...'
                className='path'
                src={require("assets/img/path3.png")}
                style={{ height: 400, paddingTop: 50 }}
              />
            </div>
            <Container>
              <Row className='justify-content-center'>
                <Col md='8'>
                  <h1 className='profile-title text-left'>
                    Programlama Dilleri
                  </h1>
                  <h5 className='text-on-back'>03</h5>
                  <br />
                  <Table responsive style={{ fontSize: 15 }}>
                    <tbody>
                      <tr>
                        <td>JAVA</td>
                        <td>
                          <i
                            class='fab fa-java'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "red",
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-danger'>
                            <Progress max='100' value='80'>
                              <span className='progress-value'>80%</span>
                            </Progress>
                            <p>Java SE + Java EE + Spring Boot </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>REACT</td>
                        <td>
                          <i
                            class='fab fa-react'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "#3498DB",
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-info'>
                            <Progress max='100' value='60'>
                              <span className='progress-value'>60%</span>
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>PYTHON</td>
                        <td>
                          <i
                            class='fab fa-python'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-warning'>
                            <Progress max='100' value='35'>
                              <span className='progress-value'>35%</span>
                            </Progress>
                            <p>Python + Tkinter </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>C / C++</td>
                        <td>
                          <i
                            class='fab fa-cuttlefish'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-info'>
                            <Progress max='100' value='30'>
                              <span className='progress-value'>30%</span>
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>PHP</td>
                        <td>
                          <i
                            class='fab fa-php'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "#4F5B93",
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-primary'>
                            <Progress max='100' value='30'>
                              <span className='progress-value'>30%</span>
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ANGULAR 2+</td>
                        <td>
                          <i
                            class='fab fa-angular'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "#A10005",
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-danger'>
                            <Progress max='100' value='15'>
                              <span className='progress-value'>15%</span>
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ANDROID STUDIO</td>
                        <td>
                          <i
                            class='fab fa-android'
                            style={{
                              paddingLeft: 30,
                              paddingRight: 30,
                              color: "#A4C639",
                              fontSize: 20
                            }}
                          ></i>
                        </td>
                        <td>
                          <div className='progress-container progress-success'>
                            <Progress max='100' value='10'>
                              <span className='progress-value'>10%</span>
                            </Progress>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='section'>
            <Container>
              <Row className='justify-content-between'>
                <Col md='6'>
                  <Row className='justify-content-between align-items-center'>
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md='5'>
                  <h1 className='profile-title text-left'>Projelerim</h1>
                  <h5 className='text-on-back'>04</h5>
                  <p className='profile-description text-left'>
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <div className='btn-wrapper pt-3'>
                    <Button
                      className='btn-simple'
                      color='primary'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      <i className='tim-icons icon-book-bookmark' /> Bookmark
                    </Button>
                    <Button
                      className='btn-simple'
                      color='info'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      <i className='tim-icons icon-bulb-63' /> Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <section className='section'>
            <Container>
              <Row>
                <Col md='6'>
                  <Card className='card-plain'>
                    <CardHeader>
                      <h1 className='profile-title text-left'>Contact</h1>
                      <h5 className='text-on-back'>03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md='6'>
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue='Mike' type='text' />
                            </FormGroup>
                          </Col>
                          <Col md='6'>
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder='mike@email.com'
                                type='email'
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md='6'>
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue='001-12321345' type='text' />
                            </FormGroup>
                          </Col>
                          <Col md='6'>
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue='CreativeTim' type='text' />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md='12'>
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder='Hello there!' type='text' />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className='btn-round float-right'
                          color='primary'
                          data-placement='right'
                          id='tooltip341148792'
                          type='button'
                        >
                          Send text
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement='right'
                          target='tooltip341148792'
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className='ml-auto' md='4'>
                  <div className='info info-horizontal'>
                    <div className='icon icon-primary'>
                      <i className='tim-icons icon-square-pin' />
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Find us at the office</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className='info info-horizontal'>
                    <div className='icon icon-primary'>
                      <i className='tim-icons icon-mobile' />
                    </div>
                    <div className='description'>
                      <h4 className='info-title'>Give us a ring</h4>
                      <p>
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default MainPage;
