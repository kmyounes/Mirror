
    var chart_config = {
        chart: {
            container: "#theTree",

            animateOnInit: true,
            connectors : {
                type: "curve"
            },

            node: {
                collapsable: true,
                collapsed: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700/*,
                /*connectorsAnimation: "bounce",
                connectorsSpeed: 700*/
            }
        },
        nodeStructure: {
            image: "img/linux.svg",
            collapsable: true,
            collapsed: true,
            children: [
                {
                    image:"img/redhat.svg",
                    collapsed: true,
                    children:[{
                        image: "img/fedora.svg"
                    },
                        {
                            image:"img/centos.png"
                        }
                         ]
                },
                {
                    image: "img/debian.svg",
                    collapsed: true,
                    children: [
                        {
                            image:"img/debian.svg"
                        },
                        {
                            image: "img/ubuntu.svg",
                            collapsed:true,
                            collapsable: true,
                            children: [
                                {
                                    image: "img/gnome.svg",
                                    link: {
                                        href:"http://openmindsclub.net"
                                    }
                                },
                                {
                                    image: "img/unity.png"
                                },
                                {
                                    image: "img/xubuntu.png"
                                },
                                {
                                    image: "img/kde.svg"
                                }
                            ]
                        }
                    ]
                },
                {
                    image: "img/archlinux-1.svg",
                    childrenDropLevel: 1,
                    collapsed: true,
                    children: [
                        {
                            image: "img/manjaro.svg",
                            collapsed:true,
                            children: [
                                {
                                    image:"img/kde.svg",
                                    link: {
                                        href: "ISOs/kde.iso",
                                    }
                                },
                                {
                                    image:"img/i3.png",
                                    link: {
                                        href: "ISOs/manjaro-i3.iso"
                                    }
                                },
                                {
                                    image: "img/gnome.svg",
                                    link: {
                                         href: "ISOs/archlinux.iso"
                                         }
                                }
                            ]
                        },
                        {
                            image: "img/archlinux.png",
                            link: {
                                href: "ISOs/archlinux.iso"
                            }

                        }
                    ]
                }

            ]
        }
    };
