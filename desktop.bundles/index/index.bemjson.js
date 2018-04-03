module.exports = {
  block: 'page',
  title: 'Title of the page',
  favicon: '/favicon.ico',
  head: [{
    elem: 'meta',
    attrs: {
      name: 'description',
      content: ''
    }
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }, {
    elem: 'css',
    url: 'index.min.css'
  }, {
    elem: 'css',
    url: '../../node_modules/normalize.css/normalize.css'
  }, {
    elem: 'css',
    url: '../../libs/bxslider/jquery.bxslider.css'
  }, {
    elem: 'css',
    url: '../../libs/fancybox-master/dist/jquery.fancybox.css'
  }, {
    elem: 'css',
    url: '../../libs/fullPage.js/jquery.fullPage.css'
  }, {
    elem: 'css',
    url: '../../libs/bxslider/jquery.bxslider.css'
  }, {
    elem: 'css',
    url: 'fonts.css'
  }, {
    elem: 'css',
    url: '../../libs/cover/cover.css'
  }],
  scripts: [{
    elem: 'js',
    url: 'index.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-1.8.2/jquery.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-2.1.3/jquery.min.js'
  }, {
    elem: 'js',
    url: '../../libs/isotope-docs/js/isotope-docs.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-easing/jquery.easing.min.js'
  }, {
    elem: 'js',
    url: '../../libs/fullPage.js/jquery.fullPage.js'
  }, {
    elem: 'js',
    url: 'http://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.1/jquery.slimscroll.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-circle-progress/dist/circle-progress.js'
  }, {
    elem: 'js',
    url: '../../libs/progressbar/progressbar.js'
  }, {
    elem: 'js',
    url: '../../libs/fullPage.js/init.fullPage.js'
  }, {
    elem: 'js',
    url: '../../libs/init.cover.bgv.js'
  }, {
    elem: 'js',
    url: '../../libs/init.click.pushy.js'
  }, {
    elem: 'js',
    url: '../../libs/bxslider/jquery.bxslider.min.js'
  }, {
    elem: 'js',
    url: '../../libs/init.bxslider.js'
  }, {
    elem: 'js',
    url: '../../libs/init.multi.bxslider.js'
  }, {
    elem: 'js',
    url: '../../libs/init.isotope.filter.js'
  }, {
    elem: 'js',
    url: '../../libs/init.pro-click.js'
  }, {
    elem: 'js',
    url: '../../libs/tween/TweenMax.min.js'
  }, {
    elem: 'js',
    url: '../../libs/scroll/ScrollToPlugin.min.js'
  },/*, {
    elem: 'js',
    url: '../../libs/init.slide.js'
  }, */{
    elem: 'js',
    url: '../../libs/ProgressBar.js'
  }, {
    elem: 'js',
    url: 'https://www.google.com/jsapi'
  }, {
    elem: 'js',
    url: '../../libs/init.video.js'
  }, {
    elem: 'js',
    attrs: {
      async: '',
      defer: ''
    },
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAiPRimoqX2VJ2I3JeCuhJ7H98vhHjQtKo&callback=init'
  }, {
    elem: 'js',
    url: '../../libs/init.map.js'
  }],
  mods: {
    theme: 'islands'
  },
  content: [{
    attrs: {
      id: 'fullPage'
    },
    content: [{
      block: 'general section',
      tag: 'section',
      attrs: {
        id: 'section0'
      },
      content: [{
        block: 'vignette',
      }, {
        block: 'intro',
        content: [{
          block: 'header',
          content: [{
            block: 'main-menu',
            mods: {
              width: 'w'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    section: 'catalog'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'home'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    section: 'catalog'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'about'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    section: 'catalog'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'work'
                  }
                }]
              }
            }]
          }, {
            block: 'logo',
            content: [{
              block: 'image',
              mix: {
                block: 'logo',
                elem: 'image'
              },
              url: '../../img/jupiter-logo-footer.png'
            }]
          }, {
            block: 'main-menu',
            mix: {
              block: 'main-menu',
              elem: 'right'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    section: 'catalog'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'services'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    section: 'catalog'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'team'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    section: 'catalog'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'contact'
                  }
                }]
              }
            }]
          }]
        }, {
          block: 'body',
          mix: {
            block: 'body',
            elem: 'intro'
          },
          content: [{
            block: 'caption',
            content: [{
              block: 'text',
              mix: {
                block: 'caption',
                elem: 'text'
              },
              content: [{
                block: 'left',
                mix: {
                  block: 'caption',
                  elem: 'left'
                },
                content: 'Lorem Ipsum'
              }, {
                block: 'center',
                mix: {
                  block: 'caption',
                  elem: 'center'
                },
                content: [{
                  block: 'link',
                  content: [{
                    block: 'image',
                    mix: {
                      block: 'logo',
                      elem: 'image'
                    },
                    url: '../../img/youtube.png'
                  }]
                }]
              }, {
                block: 'right',
                mix: {
                  block: 'caption',
                  elem: 'left'
                },
                content: 'Dolor Sit Amet'
              }]
            },{
              block: 'video',
              content: {
                block:'',
                tag: 'video controls',
                content: [{
                  tag: 'source',
                  attrs: {
                    src: '../../libs/Sail-Away/MP4/Sail-Away.mp4',
                    type: 'video/mp4'
                  }
                },{
                  tag: 'source',
                  attrs: {
                    src: '../../libs/Sail-Away/MP4/Sail-Away.mp4',
                    type: 'video/mp4'
                  }
                }]
              }
            }]
          }]
        }]
      }, {
        block: 'main',
        content: [{}]
      }, {
        block: 'slide',
        content: [{}]
      }, {
        block: 'subscribe',
        content: [{}]
      }]
    }, {
      block: 'video-backgrnd',
      cls: 'section',
      tag: 'section',
      attrs: {
        id: 'section1'
      },
      content: [{
        block: 'intro',
        mix: {
          block: 'intro',
          elem: 'style-0'
        },
        content: [{
          block: 'pushy',
          mix: {
            block: 'pushy',
            elem: 'style-0'
          },
          content: [{
            block: 'image',
            url: '../../img/menu.png'
          }]
        }, {
          block: 'pushy-left',
          mix: {
            block: 'pushy-left',
            elem: 'style-0'
          },
          attrs: {
            id: 'menu'
          },
          content: [{
            block: 'v-menu',
            content: [{
              elem: 'list',
              content: [{
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }]
            }]
          }, {
            block: 'pushy-contact',
            content: [{
              block: 'tel',
              mix: {
                block: 'pushy-contact',
                elem: 'tel'
              },
              content: '(912)779 36 25'
            }, {
              block: 'email',
              mix: {
                block: 'pushy-contact',
                elem: 'email'
              },
              content: 'office@website.com'
            }, {
              block: 'social',
              mix: {
                block: 'pushy-contact',
                elem: 'social'
              },
              content: [{
                block: 'social-menu',
                content: [{
                  elem: 'list',
                  content: [{
                    elem: 'item',
                    content: [{
                      block: 'link',
                      mods: {
                        type: 'link'
                      },
                      content: {
                        block: 'image',
                        url: '../../img/facebook-logo-in-circular-button-outlined-social-symbol.png'
                      }
                    }]
                  }, {
                    elem: 'item',
                    content: [{
                      block: 'link',
                      mods: {
                        type: 'link'
                      },
                      content: {
                        block: 'image',
                        url: '../../img/twitter-circular-button.png'
                      }
                    }]
                  }, {
                    elem: 'item',
                    content: [{
                      block: 'link',
                      mods: {
                        type: 'link'
                      },
                      content: {
                        block: 'image',
                        url: '../../img/google-plus-circular-button.png'
                      }
                    }]
                  }]
                }]
              }]
            }]
          }]
        }, {
          block: 'header',
          mix: {
            block: 'header',
            elem: 'style-0'
          },
          content: [{
            block: 'main-menu',
            mods: {
              width: 'l'
            },
            content: [{
              elem: 'section',
              mix: {
                block: 'main-menu',
                elem: 'right'
              },
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'home'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'about'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'work'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'services'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'team'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'contact'
                  }
                }]
              }
            }]
          }, {
            block: 'main-menu',
            mix: {
              block: 'main-menu',
              elem: 'three'
            },
            mods: {
              width: 'r'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/magnifying-glass.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/login.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/shopping-cart.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/like.png'
                  }
                }]
              }
            }]
          }]
        }]
      }, {
        block: 'homepage-hero-module',
        content: [{
          block: 'video-container',
          content: [{
            block: 'filter'
          }, {
            block: 'fillWidth',
            attrs: {
              preload: 'auto'
            },
            tag: 'video autoplay loop',
            content: [{
              tag: 'source',
              attrs: {
                src: '../../libs/Sail-Away/MP4/Sail-Away.mp4',
                type: 'video/mp4'
              },
              content: 'Your browser does not support the video tag. I suggest you upgrade your browser.'
            }, {
              tag: 'source',
              attrs: {
                src: '../../libs/Sail-Away/OGV/Sail-Away.ogv',
                type: 'video/webm'
              },
              content: 'Your browser does not support the video tag. I suggest you upgrade your browser.'
            }]
          }]
        }]
      }]
    }, {
      block: 'gallery',
      cls: 'section',
      tag: 'section',
      attrs: {
        id: 'section1'
      },
      content: [{
        block: 'intro',
        mix: {
          block: 'intro',
          elem: 'style-1'
        },
        content: [{
          block: 'pushy',
          mix: {
            block: 'pushy',
            elem: 'style-1'
          },
          content: [{
            block: 'image',
            mix: {
              block: 'pushy',
              elem: 'image'
            },
            content: {
              block: 'button'
            }
          }]
        }, {
          block: 'pushy-left',
          mix: {
            block: 'pushy-left',
            elem: 'style-1'
          },
          attrs: {
            id: 'menu'
          },
          content: [{
            block: 'v-menu',
            content: [{
              elem: 'list',
              content: [{
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'item',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }]
            }]
          }, {
            block: 'pushy-contact',
            content: [{
              block: 'tel',
              mix: {
                block: 'pushy-contact',
                elem: 'tel'
              },
              content: '(912)779 36 25'
            }, {
              block: 'email',
              mix: {
                block: 'pushy-contact',
                elem: 'email'
              },
              content: 'office@website.com'
            }, {
              block: 'social',
              mix: {
                block: 'pushy-contact',
                elem: 'social'
              },
              content: [{
                block: 'social-menu',
                content: [{
                  elem: 'list',
                  content: [{
                    elem: 'item',
                    content: [{
                      block: 'link',
                      mods: {
                        type: 'link'
                      },
                      content: {
                        block: 'image',
                        url: '../../img/facebook-logo-in-circular-button-outlined-social-symbol.png'
                      }
                    }]
                  }, {
                    elem: 'item',
                    content: [{
                      block: 'link',
                      mods: {
                        type: 'link'
                      },
                      content: {
                        block: 'image',
                        url: '../../img/twitter-circular-button.png'
                      }
                    }]
                  }, {
                    elem: 'item',
                    content: [{
                      block: 'link',
                      mods: {
                        type: 'link'
                      },
                      content: {
                        block: 'image',
                        url: '../../img/google-plus-circular-button.png'
                      }
                    }]
                  }]
                }]
              }]
            }]
          }]
        }, {
          block: 'header',
          mix: {
            block: 'header',
            elem: 'style-0'
          },
          content: [{
            block: 'main-menu',
            mods: {
              width: 'r'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: 'wd'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'home'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'wd'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'about'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'wd'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'work'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'wd'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'services'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'wd'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'team'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'wd'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'contact'
                  }
                }]
              }
            }]
          }, {
            block: 'main-menu',
            mix: {
              block: 'main-menu',
              elem: 'three'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/magnifying-glass.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/login.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/shopping-cart.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/like.png'
                  }
                }]
              }
            }]
          }]
        }]
      }, {
        block: 'gallery',
        content: [{
          block: 'slider',
          mix: {
            block: 'gallery',
            elem: 'slider'
          },
          content: [{
            block: 'nav',
            mix: {
              block: 'slider',
              elem: 'nav'
            },
            tag: 'ul',
            cls: 'bxslider',
            content: [{
              src: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');",
              header: 'logo',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              button: 'button'
            }, {
              src: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');",
              header: 'logo',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              button: 'button'
            }, {
              src: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');",
              header: 'logo',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              button: 'button'
            }].map(function(item) {
              return {
                block: 'nav-item',
                tag: 'li',
                content: [{
                  block: 'bgi',
                  attrs: {
                    style: item.src
                  }
                }, {
                  block: 'description',
                  content: [{
                    elem: 'logo',
                    mix: {
                      block: 'description',
                      elem: 'logo'
                    },
                    content: item.header
                  }, {
                    elem: 'text',
                    mix: {
                      block: 'description',
                      elem: 'text'
                    },
                    content: item.body
                  }, {
                    elem: 'button',
                    mix: {
                      block: 'button',
                      elem: 'description'
                    },
                    content: {
                      block: 'button',
                      mix: {
                        block: 'button',
                        elem: 'subscribe'
                      },
                      mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'submit'
                      },
                      text: 'subscribe'
                    }
                  }]
                }]
              };
            })
          }, {
            block: 'custom-nav',
            content: [{
              tag: 'span',
              attrs: {
                id: 'slider-next'
              }
            }, {
              tag: 'span',
              attrs: {
                id: 'slider-prev'
              }
            }]
          }]
        }]
      }]
      /* 4 */
    }, {
      block: 'gallery',
      cls: 'section',
      tag: 'section',
      attrs: {
        id: 'section1'
      },
      content: [{
        block: 'intro',
        mix: {
          block: 'intro',
          elem: 'style-2'
        },
        content: [{
          block: 'logo',
          content: [{
            block: 'link',
            mods: {
              theme: 'islands',
              size: 'm'
            },
            url: 'https://bem.info/',
            content: {
              block: 'image',
              mix: {
                block: 'logo',
                elem: 'link'
              },
              url: '../../img/jupiter-logo-footer.png'
            }
          }]
        }, {
          block: 'header',
          mix: {
            block: 'header',
            elem: 'style-4'
          },
          content: [{
            block: 'main-menu',
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: '75'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'home'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: '75'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'about'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: '75'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'work'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: '75'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'services'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: '75'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'team'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'contact'
                  }
                }]
              }
            }]
          }]
        }]
      }, {
        block: 'big-image',
        content: {
          block: 'image',
          mix: {
            block: 'big-image',
            elem: 'image'
          },
          content: [{
            block: 'stack',
            mix: {
              block: 'image',
              elem: 'stack'
            },
            content: [{
              block: 'item',
              cls: 'active',
              mix: {
                block: 'image',
                elem: 'item'
              },
              content: {
                block: 'bgimage',
                attrs: {
                  'data-item': 0,
                  style: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');"
                }
              }
            }, {
              block: 'item',
              mix: {
                block: 'image',
                elem: 'item'
              },
              content: {
                block: 'bgimage',
                attrs: {
                  'data-item': 1,
                  style: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');"
                }
              }
            }]
          }]
        }
      }, {
        block: 'gallery',
        mix: {
          block: 'gallery',
          elem: 'multi-slider'
        },
        content: [{
          block: 'multi-slider',
          content: {
            block: 'main-slider',
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }, {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    content: {
                      block: 'image',
                      url: '../../img/200150.png'
                    }
                  }
                }]
              }
            }]
          }
        }]
      }]
      /* 5 */
    }, {
      block: 'product',
      cls: 'section',
      tag: 'section',
      content: [{
        block: 'header',
        content: {
          block: 'product',
          mix: {
            block: 'header',
            elem: 'product'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h2'
            },
            tag: 'h2',
            content: 'our product'
          }]
        }
      }, {
        block: 'body',
        mix: {
          block: 'body',
          elem: 'intro'
        },
        content: [{
          block: 'container',
          cls: 'active',
          mix: {
            block: 'container',
            elem: 'web'
          },
          content: [{
            block: 'main-menu',
            mods: {
              mgt: 'top'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.web'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'javascript:void(0);',
                    content: 'product'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.apps'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'javascript:void(0);',
                    content: 'product'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.icons'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'javascript:void(0);',
                    content: 'product'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.proff'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'javascript:void(0);',
                    content: 'product'
                  }
                }]
              }
            }]
          }, {
            block: 'wrap',
            mix: {
              block: 'wrap',
              elem: 'square'
            },
            cls: 'web',
            content: [{
              block: 'square',
              content: [{
                src: '../../img/300230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-3'
              }, {
                src: '../../img/400230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-4'
              }, {
                src: '../../img/500230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-5'
              }].map(function(item) {
                return {
                  block: 'item web',
                  cls: item.width,
                  mix: {
                    block: 'square',
                    elem: 'item'
                  },
                  content: [{
                    block: 'image',
                    url: item.src
                  }, {
                    block: 'text',
                    content: [{
                      block: 'wrap',
                      mix: {
                        block: 'text',
                        elem: 'wrap'
                      },
                      content: [{
                        block: 'name',
                        mix: {
                          block: 'text',
                          elem: 'name'
                        },
                        content: item.header
                      }, {
                        block: 'body',
                        mix: {
                          block: 'text',
                          elem: 'body'
                        },
                        content: item.body
                      }, {
                        block: 'sale',
                        mix: {
                          block: 'text',
                          elem: 'sale'
                        },
                        content: '16'
                      }]
                    }]
                  }]
                }
              })
            }, {
              block: 'square',
              content: [{
                src: '../../img/500230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-5'
              }, {
                src: '../../img/300230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-3'
              }, {
                src: '../../img/400230.png',
                header: 'logo',
                body: 'Lorem ',
                sale: '16',
                width: 'col-sm-4'
              }].map(function(item) {
                return {
                  block: 'item web',
                  cls: item.width,
                  mix: {
                    block: 'square',
                    elem: 'item'
                  },
                  content: [{
                    block: 'image',
                    url: item.src
                  }, {
                    block: 'text',
                    content: [{
                      block: 'wrap',
                      mix: {
                        block: 'text',
                        elem: 'wrap'
                      },
                      content: [{
                        block: 'name',
                        mix: {
                          block: 'text',
                          elem: 'name'
                        },
                        content: item.header
                      }, {
                        block: 'body',
                        mix: {
                          block: 'text',
                          elem: 'body'
                        },
                        content: item.body
                      }, {
                        block: 'sale',
                        mix: {
                          block: 'text',
                          elem: 'sale'
                        },
                        content: '16'
                      }]
                    }]
                  }]
                }
              })
            }]
          }, {
            block: 'wrap',
            mix: {
              block: 'wrap',
              elem: 'square'
            },
            cls: 'apps on-active',
            content: [{
              block: 'square',
              content: [{
                src: '../../img/800230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-8'
              }, {
                src: '../../img/400230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-4'
              }].map(function(item) {
                return {
                  block: 'item',
                  cls: item.width,
                  mix: {
                    block: 'square',
                    elem: 'item'
                  },
                  content: [{
                    block: 'image',
                    url: item.src
                  }, {
                    block: 'text',
                    content: [{
                      block: 'wrap',
                      mix: {
                        block: 'text',
                        elem: 'wrap'
                      },
                      content: [{
                        block: 'name',
                        mix: {
                          block: 'text',
                          elem: 'name'
                        },
                        content: item.header
                      }, {
                        block: 'body',
                        mix: {
                          block: 'text',
                          elem: 'body'
                        },
                        content: item.body
                      }, {
                        block: 'sale',
                        mix: {
                          block: 'text',
                          elem: 'sale'
                        },
                        content: '16'
                      }]
                    }]
                  }]
                }
              })
            }, {
              block: 'square',
              content: [{
                src: '../../img/300230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-3'
              }, {
                src: '../../img/400230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-4'
              }, {
                src: '../../img/500230.png',
                header: 'logo',
                body: 'Lorem ipsum dolor sit amet',
                sale: '16',
                width: 'col-sm-5'
              }].map(function(item) {
                return {
                  block: 'item',
                  cls: item.width,
                  mix: {
                    block: 'square',
                    elem: 'item'
                  },
                  content: [{
                    block: 'image',
                    url: item.src
                  }, {
                    block: 'text',
                    content: [{
                      block: 'wrap',
                      mix: {
                        block: 'text',
                        elem: 'wrap'
                      },
                      content: [{
                        block: 'name',
                        mix: {
                          block: 'text',
                          elem: 'name'
                        },
                        content: item.header
                      }, {
                        block: 'body',
                        mix: {
                          block: 'text',
                          elem: 'body'
                        },
                        content: item.body
                      }, {
                        block: 'sale',
                        mix: {
                          block: 'text',
                          elem: 'sale'
                        },
                        content: '16'
                      }]
                    }]
                  }]
                }
              })
            }]
          }]
        }]
      }]
    }, {
      block: 'product',
      cls: 'section',
      tag: 'section',
      content: [{
        block: 'header',
        content: {
          block: 'product',
          mix: {
            block: 'header',
            elem: 'product'
          },
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h2'
            },
            tag: 'h2',
            content: 'product'
          }]
        }
      }, {
        block: 'container',
        mix: {
          block: 'grid',
          elem: 'wrap'
        },
        content: {
          block: 'landing',
          content: [{
            block: 'grid',
            mods: {
              mgt: 'top'
            },
            content: [{
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/11-shopp-500x500.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/11-shopp-500x500.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/11-shopp-500x500.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/11-shopp-500x500.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }, {
              block: 'item',
              mix: {
                block: 'grid',
                elem: 'item'
              },
              content: [{
                block: 'wrap-image',
                mix: {
                  block: 'grid',
                  elem: 'wrap-image'
                },
                content: [{
                  block: 'image',
                  url: '../../img/5-1024x1024.jpg'
                }]
              }, {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'wrap-grid'
                },
                content: [{
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  },
                  content: 'Neque Porro Quisquam'
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  },
                  content: 'apps, icons, ui'
                }, {
                  block: 'text-sale',
                  mix: {
                    block: 'grid',
                    elem: 'text-sale'
                  },
                  content: '$3000'
                }]
              }]
            }]
          }]
        }
      }]
    }, {
      block: 'product',
      cls: 'section',
      tag: 'section',
      content: [{
        block: 'block',
        mix: {
          block: 'block',
          elem: 'intro'
        },
        content: [{
          block: 'container',
          content: [{
            block: 'left',
            mix: {
              block: 'container',
              elem: 'left'
            },
            content: [{
              block: 'v-menu',
              mods: {
                cnf: 'config'
              },
              content: [{
                elem: 'list',
                content: [{
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }, {
                  elem: 'item',
                  content: [{
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'bem.info'
                  }]
                }]
              }]
            }]
          }, {
            block: 'right',
            mix: {
              block: 'container',
              elem: 'right'
            },
            content: [{
              block: 'wrap',
              mix: {
                block: 'wrap',
                elem: 'left'
              },
              content: [{
                block: 'input',
                mods: {
                  theme: 'islands',
                  size: 'm',
                  width: 'available'
                },
                placeholder: 'Введите имя'
              }]
            }, {
              block: 'wrap',
              mix: {
                block: 'wrap',
                elem: 'right'
              },
              content: {
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'item'
                },
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'items'
                }]
              }
            }]
          }, {
            block: 'middle',
            mix: {
              block: 'container',
              elem: 'middle'
            },
            content: [{
              block: 'gallery',
              content: [{
                block: 'slider',
                mix: {
                  block: 'gallery',
                  elem: 'mini'
                },
                content: [{
                  block: 'nav',
                  mix: {
                    block: 'slider',
                    elem: 'nav'
                  },
                  tag: 'ul',
                  cls: 'bxslider',
                  content: [{
                    src: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');",
                    header: 'logo',
                    body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
                    button: 'button'
                  }, {
                    src: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');",
                    header: 'logo',
                    body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
                    button: 'button'
                  }, {
                    src: "background-image: url('../../img/athabasca_falls_canyon_jasper_national_park_canadian_rockies_alberta_canada-wallpaper-1366x768.jpg');",
                    header: 'logo',
                    body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
                    button: 'button'
                  }].map(function(item) {
                    return {
                      block: 'nav-item',
                      tag: 'li',
                      content: [{
                        block: 'bgi',
                        attrs: {
                          style: item.src
                        }
                      }, {
                        block: 'description',
                        mix: {
                          block: 'description',
                          elem: 'mini'
                        },
                        content: [{
                          elem: 'logo',
                          mix: {
                            block: 'description',
                            elem: 'logo'
                          },
                          content: item.header
                        }, {
                          elem: 'text',
                          mix: {
                            block: 'description',
                            elem: 'text'
                          },
                          content: item.body
                        }, {
                          elem: 'button',
                          mix: {
                            block: 'button',
                            elem: 'description'
                          },
                          content: {
                            block: 'button',
                            mix: {
                              block: 'button',
                              elem: 'subscribe'
                            },
                            mods: {
                              theme: 'islands',
                              size: 'l',
                              type: 'submit'
                            },
                            text: 'subscribe'
                          }
                        }]
                      }]
                    };
                  })
                }, {
                  block: 'custom-nav',
                  content: [{
                    tag: 'span',
                    attrs: {
                      id: 'slider-next'
                    }
                  }, {
                    tag: 'span',
                    attrs: {
                      id: 'slider-prev'
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }, {
      block: 'product',
      cls: 'section',
      tag: 'section',
      content: [{
        block: 'product',
        mix: {
          mix: 'features',
          elem: 'product'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'features',
            elem: 'text'
          },
          tag: 'h2',
          content: 'WE GOT SKILLS!'
        }, {
          block: 'main',
          tag: 'p',
          mix: {
            block: 'product',
            elem: 'main'
          },
          content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis est non commodo luctus nisi erat porttitor.'
        }, {
          block: 'bar-wrap',
          content: [{
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar0'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'Web Design'
              }]
            }]
          }, {
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar1'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'HTML / CSS'
              }]
            }]
          }, {
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar2'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'Graphic Design'
              }]
            }]
          }, {
            block: 'progressbar',
            mix: {
              block: 'product',
              elem: 'progressbar'
            },
            content: [{
              attrs: {
                id: 'progressbar3'
              },
              content: [{
                block: 'text',
                mix: {
                  block: 'text',
                  elem: 'progressbar'
                },
                content: 'UI / UX'
              }]
            }]
          }]
        }]
      }, {
        block: 'testimonials',
        mix: {
          block: 'section',
          elem: 'testimonials'
        },
        content: [{
          block: 'product',
          mix: {
            block: 'testimonials',
            elem: 'product'
          },
          content: [{
            block: 'wrap-product',
            content: [{
              block: 'product-element',
              mix: {
                block: 'statistics',
                elem: 'product-element'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product-element',
                  elem: 'number'
                },
                content: '365'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Lorem ipsum',
                target: '_blank'
              }]
            }, {
              block: 'product-element',
              mix: {
                block: 'statistics',
                elem: 'product-element'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product-element',
                  elem: 'number'
                },
                content: '98%'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Lorem ipsum',
                target: '_blank'
              }]
            }, {
              block: 'product-element',
              mix: {
                block: 'statistics',
                elem: 'product-element'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product-element',
                  elem: 'number'
                },
                content: '69'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Lorem ipsum',
                target: '_blank'
              }]
            }, {
              block: 'product-element',
              mix: {
                block: 'statistics',
                elem: 'product-element'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product-element',
                  elem: 'number'
                },
                content: '1,642'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Lorem ipsum',
                target: '_blank'
              }]
            }]
          }]
        }]
      }]
    }, {
      block: 'section',
      cls: 'map',
      content: [{
        block: 'product',
        mix: {
          block: 'header',
          elem: 'product'
        },
        mods: {
          height: 'h'
        },
        content: [{
          block: 'text',
          mix: {
            block: 'text',
            elem: 'h2'
          },
          tag: 'h2',
          content: 'Где мы находимся'
        }]
      }, {
        block: 'wrap',
        mix: {
          block: 'map',
          elem: 'wrap'
        },
        content: [{
          block: 'google',
          mix: {
            block: 'map',
            elem: 'google'
          },
          content: {
            block: 'item',
            mix: {
              block: 'map',
              elem: 'item'
            },
            attrs: {
              id: 'map'
            }
          }
        }]
      }]
    }, {
      block: 'product',
      cls: 'section',
      tag: 'section',
      content: [{
        block: 'intro',
        mix: {
          block: 'intro',
          elem: 'style-1'
        },
        content: [{
          block: 'logo',
          content: [{
            block: 'image',
            mix: {
              block: 'logo',
              elem: 'link'
            },
            url: '../../img/jupiter-logo-footer.png'
          }]
        }, {
          block: 'header',
          mix: {
            block: 'header',
            elem: 'style-0'
          },
          content: [{
            block: 'main-menu',
            mods: {
              width: 'l'
            },
            content: [{
              elem: 'section',
              mix: {
                block: 'main-menu',
                elem: 'right'
              },
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'home'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'about'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'work'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'services'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'team'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    url: 'https://bem.info/',
                    content: 'contact'
                  }
                }]
              }
            }]
          }, {
            block: 'main-menu',
            mix: {
              block: 'main-menu',
              elem: 'three'
            },
            mods: {
              width: 'r'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/magnifying-glass.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/login.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/shopping-cart.png'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    mgr: 'mr'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/like.png'
                  }
                }]
              }
            }]
          }]
        }]
      },{
        block: 'subscribe',
        content: [{
          block: 'text',
          mix: {
            block: 'subscribe',
            elem: 'text'
          },
          content: [{
            block: 'title',
            mix: {
              block: 'subscribe',
              elem: 'title'
            },
            content: 'Lorem Ipsum'
          }, {
            block: 'main',
            mix: {
              block: 'subscribe',
              elem: 'main'
            },
            content: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen Duis mollis, est non commodo luctus, nisi eart porttitor ligula'
          }, {
            block: 'input-wrap',
            content: [{
              block: 'input',
              mix: {
                block: 'subscribe',
                elem: 'input'
              },
              mods: {
                theme: 'islands',
                size: 'l',
                type: 'search'
              },
              placeholder: 'Enter email address'
            }, {
              block: 'button',
              mix: {
                block: 'subscribe',
                elem: 'button'
              },
              mods: {
                theme: 'islands',
                size: 'l',
                type: 'submit'
              },
              text: 'subscribe'
            }]
          }]
        }]
      },{
        block: 'footer',
        content: [{
          block: 'wrap',
          mix:{
            block: 'footer',
            elem: 'wrap'
          },
          content: [{
          block: 'information',
          content: [{
            block: 'v-menu',
            content: [{
              elem: 'list',
              mix: {
                block: 'footer',
                elem: 'v-menu'
              },
              content: [{
                elem: 'itm',
                content: [{
                  block: 'link',
                  mix: {
                    block: 'footer',
                    elem: 'item-header'
                  },
                  url: 'https://bem.info/',
                  content: 'information'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }]
            }]
          }]
        },{
          block: 'service',
          content: [{
            block: 'v-menu',
            content: [{
              elem: 'list',
              content: [{
                elem: 'itm',
                content: [{
                  block: 'link',
                  mix: {
                    block: 'footer',
                    elem: 'item-header'
                  },
                  url: 'https://bem.info/',
                  content: 'service'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }]
            }]
          }]
        },{
          block: 'categories',
          content: [{
            block: 'v-menu',
            content: [{
              elem: 'list',
              content: [{
                elem: 'itm',
                content: [{
                  block: 'link',
                  mix: {
                    block: 'footer',
                    elem: 'item-header'
                  },
                  url: 'https://bem.info/',
                  content: 'categories'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }]
            }]
          }]
        },{
          block: 'follow',
          content: [{
            block: 'v-menu',
            content: [{
              elem: 'list',
              content: [{
                elem: 'itm',
                content: [{
                  block: 'link',
                  mix: {
                    block: 'footer',
                    elem: 'item-header'
                  },
                  url: 'https://bem.info/',
                  content: 'follow'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }, {
                elem: 'itm',
                content: [{
                  block: 'link',
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  url: 'https://bem.info/',
                  content: 'bem.info'
                }]
              }]
            }]
          }]
        }]
        }]
      }]
    }]
  }]
};
