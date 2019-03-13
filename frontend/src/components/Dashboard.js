import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
                    <div>
                    <title>this is the dashboard</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                      <div style={{backgroundColor: '#f2f2f2',paddingTop:"0px"}}>
                        <div className="container">
                          <div className="row">
                          <p>this is so cool</p>
                            <div className="col-md-1" />
                            <div className="col-md-10">
                              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                {/* Indicators */}
                                <ol className="carousel-indicators">
                                  <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                  <li data-target="#myCarousel" data-slide-to={1} />
                                  <li data-target="#myCarousel" data-slide-to={2} />
                                </ol>
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                  <div className="item active">
                                    <img src="/images/pic1.jpg" alt="Los Angeles" style={{width: '100%', height: '400px'}} />
                                  </div>
                                  <div className="item">
                                    <img src="/images/pic2.jpg" alt="Chicago" style={{width: '100%', height: '400px'}} />
                                  </div>
                                  <div className="item">
                                    <img src="/images/pic3.jpg" alt="New york" style={{width: '100%', height: '400px'}} />
                                  </div>
                                </div>
                                {/* Left and right controls */}
                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                  <span className="glyphicon glyphicon-chevron-left" />
                                  <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                  <span className="glyphicon glyphicon-chevron-right" />
                                  <span className="sr-only">Next</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-md-1" />
                          </div>
                        </div>
                        <div className="container" style={{paddingTop: '70px'}}>
                          <div className="row">
                            <div className="col-md-1" />
                            <div className="col-md-10" style={{padding: '0px'}}>
                              <div className="col-md-12" style={{padding: '0px'}}>
                                <div className="col-lg-4">
                                  <div className="row" style={{padding: '0px'}}>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="thumbnail" style={{padding: '0px'}}>
                                        <a href="/w3images/lights.jpg" target="_blank">
                                          <img src="/images/lamp-400.jpg" alt="Lights" style={{width: '100%'}} />
                                        </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
                                          </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
                                            </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>&lt;%= title %&gt;</a>
                                            </h1>
                                            <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
                                              <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
                                            </h1>
                                            <div>
                                              <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>date</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="thumbnail" style={{padding: '0px'}}>
                                        <a href="/w3images/lights.jpg" target="_blank">
                                          <img src="/images/watch-400.jpg" alt="Lights" style={{width: '100%'}} />
                                        </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
                                          </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
                                            </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>&lt;%= title %&gt;</a>
                                            </h1>
                                            <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
                                              <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
                                            </h1>
                                            <div>
                                              <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>date</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                      <div className="thumbnail" style={{padding: '0px'}}>
                                        <a href="/w3images/lights.jpg" target="_blank">
                                          <img src="/images/tulips-400.jpg" alt="Lights" style={{width: '100%'}} />
                                        </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
                                          </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
                                            </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>&lt;%= title %&gt;</a>
                                            </h1>
                                            <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
                                              <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
                                            </h1>
                                            <div>
                                              <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>date</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="thumbnail" style={{padding: '0px'}}>
                                        <a href="/w3images/lights.jpg" target="_blank">
                                          <img src="/images/wheel-400.jpg" alt="Lights" style={{width: '100%'}} />
                                        </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
                                          </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
                                            </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>&lt;%= title %&gt;</a>
                                            </h1>
                                            <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
                                              <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
                                            </h1>
                                            <div>
                                              <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>date</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                  <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                      <div className="thumbnail" style={{padding: '0px'}}>
                                        <a href="/w3images/lights.jpg" target="_blank">
                                          <img src="/images/music-400.jpg" alt="Lights" style={{width: '100%'}} />
                                        </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
                                          </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
                                            </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>&lt;%= title %&gt;</a>
                                            </h1>
                                            <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
                                              <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
                                            </h1>
                                            <div>
                                              <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>date</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                      <div className="thumbnail" style={{padding: '0px'}}>
                                        <a href="/w3images/lights.jpg" target="_blank">
                                          <img src="/images/guitarist-400.jpg" alt="Lights" style={{width: '100%'}} />
                                        </a><div className="caption" style={{padding: '1.5rem 2.4rem 0'}}><a href="/w3images/lights.jpg" target="_blank">
                                          </a><div style={{marginBottom: '1.2rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              <p id="username" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', textTransform: 'uppercase', color: '#1d28a1'}} />
                                            </a><h1 id="title" style={{textAlign: 'center', marginBottom: '4.5rem'}}><a href="/w3images/lights.jpg" target="_blank">
                                              </a><a style={{textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}}>&lt;%= title %&gt;</a>
                                            </h1>
                                            <h1 id="description" style={{textAlign: 'center', marginBottom: '4.5rem'}}>
                                              <a style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-.1rem', color: '#000'}} />
                                            </h1>
                                            <div>
                                              <p id="date" style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '.25rem', color: '#808080'}}>date</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div></div><div className="col-md-1" /> </div>
                      </div>
                    </div>
                  );
                }
              };

              