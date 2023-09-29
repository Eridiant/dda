// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

    var header = document.querySelector('.header');
    let flag = 1;
    scrl();
    window.addEventListener("scroll", (e) => {
        scrl();
    })

    function scrl() {
        let height = window.scrollY;
        if (height > 140 && flag) {
            flag = 0;
            addBg();
        } else if (height <= 100 && !flag) {
            flag = 1;
            removeBg();
        }
    }

    function addBg() {
        header.classList.add('scroll');
        document.body.classList.add('scr');
    }

    function removeBg() {
        header.classList.remove('scroll');
        document.body.classList.remove('scr');
    }

    const form = document.querySelector('#form');
    form?.addEventListener('submit', handleFormSubmit);

    const forms = document.querySelector('#forms');
    forms?.addEventListener('submit', handleFormSubmit);

    var photo = new Swiper(".photo-swiper", {
        slidesPerView: "auto",
        spaceBetween: 35,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                // spaceBetween: 35,
            },
            768: {
                slidesPerView: 2,
            },
            100: {
                slidesPerView: 1,
                // centeredSlides: true,
                // slidesPerView: "auto",
            },
        },
    });

    var districts = new Swiper(".districts-swiper", {
        // slidesPerView: "auto",
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 35,
        // autoHeight: true,
        // loop: true,
        // initialSlide: 1,
        // dynamicBullets: true,
        // watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".districts-next",
            prevEl: ".districts-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                // spaceBetween: 35,
            },
            768: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
                // centeredSlides: true,
                // slidesPerView: "auto",
            },
        },
    });

    // var popups = new Swiper(".popup-swiper", {
    //     // slidesPerView: "auto",
    //     slidesPerView: 1,
    //     // centeredSlides: true,
    //     spaceBetween: 35,
    //     // autoHeight: true,
    //     // loop: true,
    //     observer: true,
    //     // observeParents: true,
    //     // observeSlideChildren: true,
    //     // initialSlide: 1,
    //     // dynamicBullets: true,
    //     // watchOverflow: true,
    //     // pagination: {
    //     //     el: ".swiper-pagination",
    //     //     clickable: true,
    //     // },
    //     navigation: {
    //         nextEl: ".popup-swiper-button-next",
    //         prevEl: ".popup-swiper-button-prev",
    //     },
    // });

    var projects = new Swiper(".projects-swiper", {
        // slidesPerView: "auto",
        // slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 35,
        // autoHeight: true,
        // loop: true,
        // initialSlide: 1,
        // dynamicBullets: true,
        // watchOverflow: true,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".projects-next",
            prevEl: ".projects-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                // spaceBetween: 35,
            },
            768: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
                // centeredSlides: true,
                // slidesPerView: "auto",
            },
        },
    });


    var districts = new Swiper(".experts-swiper", {
        // slidesPerView: "auto",
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 35,
        // autoHeight: true,
        // loop: true,
        // initialSlide: 1,
        // dynamicBullets: true,
        // watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".experts-next",
            prevEl: ".experts-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                // spaceBetween: 35,
            },
            768: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
                // centeredSlides: true,
                // slidesPerView: "auto",
            },
        },
    });

    if (document.querySelector('.opinion')) {

        // Sample data
        // var data = [200, 200, 230, 220, 250, 280, 280, 300, 330, 370, 330, 330, 350, 400, 450, 450, 490, 670, 700, 720, 730, 750];
        var data = graph.map(item => item.cost);

        // Create the chart
        var ctx = document.getElementById('chart').getContext('2d');
        var gradient = ctx.createLinearGradient(0, 0, 0, 500); // Adjust the gradient dimensions as needed
        gradient.addColorStop(0, 'rgba(0, 0, 255, 0.9)'); // Start color and opacity
        gradient.addColorStop(0.7, 'rgba(0, 255, 255, 0.0)'); // End color and opacity
        var grad = ctx.createLinearGradient(0, 0, 0, 500);
        grad.addColorStop(0, 'rgba(0, 0, 255, 1)');
        grad.addColorStop(1, 'rgba(0, 255, 255, 0.5)');
        // gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');   // End color and opacity

        // const totalDuration = 2000;
        // const delayBetweenPoints = totalDuration / data.length;
        // const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
        // const animation = {
        //     x: {
        //         type: 'number',
        //         easing: 'linear',
        //         duration: delayBetweenPoints,
        //         from: NaN, // the point is initially skipped
        //         delay(ctx) {
        //             if (ctx.type !== 'data' || ctx.xStarted) {
        //                 return 0;
        //             }
        //             ctx.xStarted = true;
        //             return ctx.index * delayBetweenPoints;
        //         }
        //     },
        //     y: {
        //         type: 'number',
        //         easing: 'linear',
        //         duration: delayBetweenPoints,
        //         from: previousY,
        //         delay(ctx) {
        //             if (ctx.type !== 'data' || ctx.yStarted) {
        //                 return 0;
        //             }
        //             ctx.yStarted = true;
        //             return ctx.index * delayBetweenPoints;
        //         }
        //     }
        // };

        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                // labels: data.map(function (_, i) { return i + 1; }),['2018', '2019', '2020', '2021', '2022', '2023']
                labels: graph.map(item => item.data),
                datasets: [{
                    data: data,
                    borderColor: grad,
                    borderWidth: .4,
                    pointRadius: .1,
                    pointHoverRadius: .1,
                    fill: true,
                    backgroundColor: gradient,
                    pointStyle: false,
                    tension: 0.4
                }]
            },
            options: {
                // layout: {
                //     padding: 10
                // },
                // title: {
                //     display: false
                // },
                // tooltips: {
                //     mode: 'index',
                //     intersect: false
                // },
                // scales: {
                //     y: {
                //         title: {
                //             display: true,
                //             text: 'Your Title'
                //         }
                //     }
                // },

                scales: {
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '$';
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                hover: {
                    mode: 'index',
                    intersect: false
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    tooltip: {
                        usePointStyle: true,
                        callbacks: {
                            label: function (context) {
                                return context.parsed.y + '$';
                            }
                        }
                    },
                    title: {
                        // display: true,
                        // text: 'средняя стоимость недвижимость в Грузии новостройки за 1 кв.м'
                        display: false,
                        // text: (ctx) => {
                        //     const {
                        //         axis = 'xy', intersect, mode
                        //     } = ctx.chart.options.interaction;
                        //     return 'Mode: ' + mode + ', axis: ' + axis + ', intersect: ' + intersect;
                        // }
                    },

                    legend: {
                        display: false
                    },

                    // tooltip: {
                    //     enabled: false, // Disable default tooltip
                    //     position: 'nearest',
                    //     external: (context) => {
                    //         // Tooltip element
                    //         let tooltipEl = chart.canvas.parentNode.querySelector('div');

                    //         // Create tooltip element if it doesn't exist
                    //         if (!tooltipEl) {
                    //             tooltipEl = document.createElement('div');
                    //             tooltipEl.id = 'custom-tooltip';
                    //             tooltipEl.className = 'custom-tooltip';
                    //             document.body.appendChild(tooltipEl);
                    //         }

                    //         // Hide tooltip if no tooltip position is provided
                    //         if (context.tooltip.position === undefined || context.tooltip.opacity === 0) {
                    //             tooltipEl.style.opacity = 0;
                    //             return;
                    //         }

                    //         // Set tooltip content (Y-axis value)
                    //         const tooltipValue = context.tooltip.dataPoints[0].formattedValue;
                    //         tooltipEl.innerHTML = tooltipValue;

                    //         // Set tooltip position (under the pointing point)
                    //         const position = context.tooltip.caretY + 10;
                    //         tooltipEl.style.top = position + 'px';
                    //         tooltipEl.style.left = context.tooltip.caretX + 'px';

                    //         // Show tooltip with a fade-in effect
                    //         tooltipEl.style.opacity = 1;
                    //         tooltipEl.style.transition = 'all 0.3s ease';
                    //     }
                    // },
                    filler: {
                        propagate: false,
                    },
                },
                animation: {
                    duration: 1000, // Animation duration in milliseconds
                    easing: 'linear' // Animation easing function
                }
                // scales: {
                //     x: {
                //         min: 2018,
                //         max: 2023,
                //     }
                // }
                // animation
            }

        });

        // Update tooltip on mousemove
        var canvas = chart.canvas;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        canvas.addEventListener('mousemove', function (event) {
            var points = chart.getElementsAtEventForMode(event, 'nearest', {
                intersect: true
            }, true);
            if (points.length > 0) {
                var value = points[0].parsed.y;
                canvas.setAttribute('title', 'Value: ' + value);
            }
        });
        // Helper function to create gradient for borderColor
        function createGradient(ctx, color1, color2) {
            var gradient = ctx.createLinearGradient(0, 0, 0, 300); // Adjust the gradient dimensions as needed
            gradient.addColorStop(0, color1);
            gradient.addColorStop(1, color2);
            return gradient;
        }
    }

    if (document.querySelector('.first')) {


        // Call the delayedCall function to initiate the delayed calls
        // delayedCall();

        // document.querySelector('.first-switch').addEventListener('mouseleave', () => {
        //     console.log('out');
        //     delayedCall();
        // });

    }


    if (document.querySelector('.first-swiper')) {
        var thumb = new Swiper(".thumbs-slider", {
            spaceBetween: 10,
            effect: 'creative',
            creativeEffect: {
                prev: {
                    opacity: 0
                },
                next: {
                    opacity: 0
                },
            },
            watchSlidesProgress: true,
        });
        var cw = new Swiper(".first-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            // loop: true,
            effect: "fade",
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".first-button-next",
                prevEl: ".first-button-prev",
            },
            thumbs: {
                swiper: thumb,
            },
        });
    }

    document.addEventListener('click', (e) => {
        let target = e.target;

        // slider for del
        if (target.closest('.first-switch .first-item')) {
            let num = target.closest('.first-switch .first-item').dataset.item;

            cw.slideTo(Number(num));
        }

        if (target.closest('.projects .projects-switch a')) {
            e.preventDefault();
            document.querySelector('.projects .projects-switch .active').classList.remove('active');
            target.closest('.projects-switch a').classList.add('active');
            // target = target.closest('a');
            // console.log('target', target);
            ajaxRequest('site/projects', {'options':target.closest('a').dataset.type})
                .then(response => {
                    if (JSON.parse(response)) {

                        document.querySelector('#projects').innerHTML = JSON.parse(response);

                        var prj = new Swiper("#projects .projects-swiper", {
                            // slidesPerView: "auto",
                            slidesPerView: 3,
                            // centeredSlides: true,
                            spaceBetween: 35,
                            // autoHeight: true,
                            // loop: true,
                            // initialSlide: 1,
                            // dynamicBullets: true,
                            // watchOverflow: true,
                            // observer: true,
                            // observeParents: true,
                            // observeSlideChildren: true,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: true,
                            },
                            navigation: {
                                nextEl: ".projects-next",
                                prevEl: ".projects-prev",
                            },
                            breakpoints: {
                                1024: {
                                    slidesPerView: 3,
                                    // spaceBetween: 35,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                300: {
                                    slidesPerView: 1,
                                    // centeredSlides: true,
                                    // slidesPerView: "auto",
                                },
                            },
                        });
                        return;
                    }

            });
        }

        if (target.closest('.projects-del .projects-switch a') && false) {
            e.preventDefault();
            document.querySelector('.projects .projects-switch .active').classList.remove('active');
            target.closest('.projects-switch a').classList.add('active');
            let type = target.closest('.projects .projects-switch a').dataset.type;
            // console.log('type', type);
            let items = document.querySelectorAll(`.projects .swiper-slide[data-type~="${type}"]`);
            // console.log('items', items);

            if (type == 'all') {
                document.querySelector('.projects-swiper').classList.add('all');
                projects.update();
                return;
            }

            document.querySelector('.projects-swiper').classList.remove('all');
            let all = document.querySelectorAll('.projects .swiper-slide');
            all.forEach(element => {
                element.classList.remove('show');
            });
            items.forEach(element => {
                element.classList.add('show');
            });
            projects.update();
        }

        if (target.classList.contains('success')) {
            document.querySelectorAll('.active').forEach(element => {
                element.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }

        if (target.closest('.form-target')) {
            e.preventDefault();
            document.querySelector('.form-popup').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        if (target.closest('.form-close') || target.classList.contains('form')) {
            document.querySelector('.form-popup').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        if (target.closest('.district')) {
            e.preventDefault();
            let popup = document.querySelector('.popup');
            let district_id = target.closest('.swiper-slide.destination').dataset.target;

            ajaxRequest('site/district', {'district_id':district_id})
                .then(response => {
                    if (JSON.parse(response)) {
                        popup.querySelector('.popup-inner').innerHTML = JSON.parse(response);

                        if (popup.querySelector('.card-swiper')) {
                            var cw = new Swiper(".card-swiper", {
                                slidesPerView: 1,
                                spaceBetween: 35,
                                navigation: {
                                    nextEl: ".popup-swiper-button-next",
                                    prevEl: ".popup-swiper-button-prev",
                                },
                            });
                        }

                        popup.dataset.current = district_id;
                        popup.classList.add('active');
                        document.body.style.overflow = 'hidden';
                        return;
                    }
                })
        }

        if (target.closest('.project')) {
            e.preventDefault();
            let popup = document.querySelector('.popup');
            let project_id = target.closest('.swiper-slide.destination').dataset.id;

            ajaxRequest('site/project', {'project_id':project_id})
                .then(response => {
                    if (JSON.parse(response)) {
                        popup.querySelector('.popup-inner').innerHTML = JSON.parse(response);

                        if (popup.querySelector('.card-swiper')) {
                            var cw = new Swiper(".card-swiper", {
                                slidesPerView: 1,
                                spaceBetween: 35,
                                navigation: {
                                    nextEl: ".popup-swiper-button-next",
                                    prevEl: ".popup-swiper-button-prev",
                                },
                            });
                        }

                        popup.dataset.current = project_id;
                        popup.classList.add('active');
                        document.body.style.overflow = 'hidden';
                        return;
                    }
                })
            // continue from here
            // add popup project card
        }
        var crt;
        if (target.closest('.target')) {
            e.preventDefault();
            let popup = document.querySelector('.popup');
            popup.querySelector('.popup-inner').innerHTML = target.closest('.destination').innerHTML;
            if (target.closest('.destination').dataset.class !== undefined) {
                popup.classList.add(target.closest('.destination').dataset.class);
            } else {
                if (popup.classList.contains('expert')) {
                    popup.classList.remove('expert');
                };
            }
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
            let num = Number(target.closest('.swiper-slide').dataset.id);

            document.querySelector('.popup').dataset.current = num;
        }
        if (target.closest('.popup .card-sl')) {

            // popups?.destroy();
            let num = Number(document.querySelector('.popup').dataset.current); //data-swiper-slide-index
            ajaxRequest('site/gallery', {'num':num})
                .then(response => {

                    document.querySelector('.popup .popup-inner').innerHTML = JSON.parse(response);
                    let popup = document.querySelector('.popup');
                    popup.classList.add('gallery');

                    var popups = new Swiper(".popup-swiper", {
                        // slidesPerView: "auto",
                        slidesPerView: 1,
                        // centeredSlides: true,
                        spaceBetween: 35,
                        autoHeight: true,
                        // autoHeight: true,
                        // loop: true,
                        observer: true,
                        // observeParents: true,
                        // observeSlideChildren: true,
                        // initialSlide: 1,
                        // dynamicBullets: true,
                        // watchOverflow: true,
                        // pagination: {
                        //     el: ".swiper-pagination",
                        //     clickable: true,
                        // },
                        navigation: {
                            nextEl: ".popup-swiper-button-next",
                            prevEl: ".popup-swiper-button-prev",
                        },
                    });
            });

            // popups.update();
        }
        if (target.closest('.popup-close') || target.classList.contains('popup')) {
            document.querySelector('.popup').className = 'popup';
            document.body.style.overflow = 'auto';
        }

        if (target.closest('.show .menu-icon') || target.classList.contains('show')) {
            document.querySelector('.menu').classList.remove('show');
            document.body.classList.remove('show');
            document.body.style.overflow = 'auto';
            return;
        }
        if (target.closest('.menu-icon')) {
            document.querySelector('.menu').classList.add('show');
            document.body.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        if (target.closest('.dropdown')) {
            if (target.closest('.dropdown-options span')) {
                document.querySelector('.select span').innerHTML = target.closest('.dropdown-options span').innerHTML;
            }
            document.querySelector('.dropdown').classList.toggle('choices');
            return;
        }
        document.querySelector('.dropdown').classList.remove('choices');
    })

})

window.addEventListener('load', () => {

    // if (document.querySelector('#map')) {
    //     init();
    // }

    if (document.querySelector('#districts')) {
        districts();

        document.querySelector('.districts').addEventListener('mouseover', (e) => {
            let target = e.target;
            if (target.closest('.districts-swiper .destination')) {
                let id = target.closest('.destination').dataset.target;

                let i = id - 1;
                let latLng = districtsData[i].position;

                moveMapTo(latLng);
            }
        })
        // let districts = document.querySelector('#districts').contentDocument;
        // districts.addEventListener('click', (e) => {
        //     if (e.target.closest('.area')) {
        //         let area = e.target.closest('.area').dataset.i;
        //         let trg = document.querySelector(`.districts-swiper .destination[data-target="${area}"]`);
        //         let popup = document.querySelector('.popup');
        //         popup.querySelector('.popup-inner').innerHTML = trg.innerHTML;
        //         if (popup.classList.contains('expert')) {
        //             popup.classList.remove('expert');
        //         };
        //         popup.classList.add('active');
        //         document.body.style.overflow = 'hidden';
        //     }
        // })
    }
})



let handleFormSubmit = (event) => {
    event.preventDefault();
    document.querySelectorAll(".form-btn.btn").forEach(el => {
        el.disabled = true;
    })

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    // console.log(data);
    ajaxRequest('site/send-form', data)
        .then(response => {
            if (JSON.parse(response).data.success) {
                document.querySelector('.success').classList.add('active');
                form.reset();
            }
            document.querySelectorAll(".form-btn.btn").forEach(el => {
                el.disabled = true;
            })
        });
}

function ajaxRequest(cntr, rqst) {
    // console.log(wrap.dataset.id);
    return new Promise((succeed, fail) => {
        // console.log(wrap.dataset.id);
        let quizRequest = new XMLHttpRequest();
        quizRequest.open("POST", `/${cntr}`, true);
        quizRequest.setRequestHeader('Content-Type', 'application/json');

        quizRequest.setRequestHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content);
        quizRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        quizRequest.onload = function () {
            if (quizRequest.readyState == XMLHttpRequest.DONE && quizRequest.status == 200) {
                succeed(quizRequest.response);
            } else if (quizRequest.status == 400) {
                // throw Error('Ошибка: ' + quizRequest.status);
                fail(new Error(`Request failed: ${quizRequest.status}`));
            } else {
                // throw Error('Ошибка, что-то пошло не так.');
                fail(new Error(`Request failed: ${quizRequest.status}`));
            }
        }
        quizRequest.onerror = function () {
            console.log(onerror)
        };

        // let data = {};
        // let data = { 'flat':i };

        // quizRequest.send('survey_id=2&parent_id=0');
        // quizRequest.send(JSON.stringify(data));
        quizRequest.send(JSON.stringify(rqst));
    })
}

var map;
var districtPolygon = [];

function districts() {
    let mapOptions = {
        zoom: 13,

        center: new google.maps.LatLng(41.649936, 41.6338956),

        styles: [{"featureType":"all","elementType":"all","stylers":[{"color":"#202c3e"}]},
        {"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"weight":"1.39"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"weight":"0.96"},{"saturation":"9"},{"visibility":"on"},{"color":"#000000"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":"9"},{"color":"#29446b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#193a55"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}],
        // sryle:[
        //     {
        //         "featureType": "all",
        //         "elementType": "all",
        //         "stylers": [
        //             {
        //                 "invert_lightness": true
        //             },
        //             {
        //                 "saturation": "-9"
        //             },
        //             {
        //                 "lightness": "0"
        //             },
        //             {
        //                 "visibility": "simplified"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative.country",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "color": "#18ff00"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative.province",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "color": "#ff0000"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative.locality",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "color": "#00b2ff"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative.neighborhood",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "simplified"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "administrative.land_parcel",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "color": "#ff0000"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "landscape.man_made",
        //         "elementType": "all",
        //         "stylers": [
        //             {
        //                 "weight": "1.00"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "landscape.man_made",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "landscape.natural.landcover",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "simplified"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi.attraction",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "off"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi.business",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "off"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi.park",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi.place_of_worship",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "simplified"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "poi.school",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "visibility": "simplified"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "all",
        //         "stylers": [
        //             {
        //                 "weight": "0.49"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#fefffc"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "geometry.fill",
        //         "stylers": [
        //             {
        //                 "color": "#ffffff"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "geometry.stroke",
        //         "stylers": [
        //             {
        //                 "color": "#0020ff"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "labels",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             },
        //             {
        //                 "weight": "0.01"
        //             },
        //             {
        //                 "lightness": "-7"
        //             },
        //             {
        //                 "saturation": "-35"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "labels.text.stroke",
        //         "stylers": [
        //             {
        //                 "visibility": "off"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway",
        //         "elementType": "labels.icon",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway.controlled_access",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#62ffd0"
        //             },
        //             {
        //                 "visibility": "on"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway.controlled_access",
        //         "elementType": "geometry.fill",
        //         "stylers": [
        //             {
        //                 "color": "#ff2d2d"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.highway.controlled_access",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "visibility": "off"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.arterial",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "hue": "#ff0000"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.local",
        //         "elementType": "geometry",
        //         "stylers": [
        //             {
        //                 "color": "#ffffff"
        //             },
        //             {
        //                 "visibility": "simplified"
        //             },
        //             {
        //                 "saturation": "8"
        //             },
        //             {
        //                 "lightness": "-57"
        //             },
        //             {
        //                 "gamma": "1.68"
        //             },
        //             {
        //                 "weight": "1.17"
        //             }
        //         ]
        //     },
        //     {
        //         "featureType": "road.local",
        //         "elementType": "labels.text",
        //         "stylers": [
        //             {
        //                 "visibility": "on"
        //             }
        //         ]
        //     }
        // ]
    };

    let mapElement = document.querySelector('#districts');

    map = new google.maps.Map(mapElement, mapOptions);

    // districtsData = Object.assign(districtsData);
    // console.log('districtsDatas', districtsData);
    for (var i = 0; i < districtsData.length; i++) {
        // console.log('districtsDatas', districtsData.polygon);
        var district = districtsData[i];
        districtPolygon[i] = new google.maps.Polygon({
            paths: JSON.parse(district.polygon),
            strokeColor: district.color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: district.color,
            fillOpacity: 0.35,
        });
        districtPolygon[i].setMap(map);
    
        var districtLabel = new google.maps.Marker({
            position: district.position,
            map: map,
            labelColor: '#FF00FF',
            label: {text: district.name, color: district.labelColor},
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 0,
                fillColor: district.color,
                fillOpacity: 1
            }
        });
        districtLabel.setMap(map);
    }

}

function moveMapTo(latLng, zoom = 15) {
    map.panTo(latLng);
    map.setZoom(zoom);

    // console.log('districtPolygon', districtPolygon);
    // if (activePolygon === districtPolygon) {
    //     stopFlashing(activePolygon);
    //     activePolygon = null;
    // } else {
    //     if (activePolygon) {
    //         stopFlashing(activePolygon);
    //     }
    //     startFlashing(districtPolygon);
    //     activePolygon = districtPolygon;
    // }
}

// var activePolygon = null;
// var flashingInterval;

// function startFlashing(polygon) {
//     var originalFillColor = polygon.getOptions().fillColor;
//     var flashingFillColor = '#FFFFFF'; // Color to flash

//     flashingInterval = setInterval(function() {
//     var currentFillColor = polygon.getOptions().fillColor;

//     if (currentFillColor === originalFillColor) {
//         polygon.setOptions({ fillColor: flashingFillColor });
//         } else {
//             polygon.setOptions({ fillColor: originalFillColor });
//         }
//     }, 500); // Flashing interval in milliseconds
// }

// function stopFlashing(polygon) {
//     clearInterval(flashingInterval);
//     polygon.setOptions({ fillColor: polygon.getOptions().fillColor });
// }

function showDistrict(event) {
    let infoBox = new google.maps.InfoWindow();
    let coords = new google.maps.LatLng(event.data.lat, event.data.lng);
    infoBox.setPosition(coords);
    infoBox.open(map);
    map.setCenter(coords);
}

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    let mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(41.649936, 41.6338956),

        // styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#202c3e"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"weight":"1.39"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"weight":"0.96"},{"saturation":"9"},{"visibility":"on"},{"color":"#000000"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":"9"},{"color":"#29446b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#193a55"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]
    
        styles:[
            {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#8ec3b9"
                }
            ]
            },
            {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                "color": "#1a3646"
                }
            ]
            },
            {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                "color": "#4b6878"
                }
            ]
            },
            {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#64779e"
                }
            ]
            },
            {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                "color": "#4b6878"
                }
            ]
            },
            {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                "color": "#1d2c4d"
                },
                {
                "visibility": "on"
                }
            ]
            },
            {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                "color": "#29446b"
                },
                {
                "visibility": "on"
                }
            ]
            },
            {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                "color": "#023e58"
                }
            ]
            },
            {
            "featureType": "poi",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                "color": "#283d6a"
                }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#6f9ba5"
                }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                "color": "#1d2c4d"
                }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                "color": "#023e58"
                }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#3C7680"
                }
            ]
            },
            {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                "color": "#133f63"
                }
            ]
            },
            {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#98a5be"
                }
            ]
            },
            {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                "color": "#1d2c4d"
                }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                "color": "#193a55"
                }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                "color": "#255763"
                }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#b0d5ce"
                }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                "color": "#023e58"
                }
            ]
            },
            {
            "featureType": "transit",
            "stylers": [
                {
                "visibility": "off"
                }
            ]
            },
            {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#98a5be"
                }
            ]
            },
            {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                "color": "#1d2c4d"
                }
            ]
            },
            {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
                {
                "color": "#283d6a"
                }
            ]
            },
            {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                "color": "#3a4762"
                }
            ]
            },
            {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                "color": "#035478"
                }
            ]
            },
            {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                "color": "#4e6d70"
                }
            ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    let mapElement = document.querySelector('#maps');

    // Create the Google Map using our element and options defined above
    let map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it 
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.649936, 41.6338956),
        map: map,
        title: 'DDA Real Estate',
        loading: 'lazy'
    });

}