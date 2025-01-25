import { title } from "process";

export default {
    test:'test',
    language:'中文',
    header:{
        title: "小树苗代孕中心",
        options:[{
            text: 'Intended Parents',
            link: '/pages/ParentsSection',
            options: [{
                text: 'Surrogate Matching',
                link: 'surrogacy-matching-process'
            }, {
                text: 'Single Parents & LGBTQIA+',
                link: 'egg-sperm-donation-help'
            }, {
                text: 'Surrogacy Process',
                link: 'surrogacy-plan-process'
            }, {
                text: 'Costs & Packages',
                link: '/pages/surrogacy-cost'
            }]
        }, {
            text: 'Surrogates',
            link: '/pages/BecomeSurrogate',
            options: [{
                text: 'Who Can Be a Surrogate',
                link: 'who-can-be-surrogate'
            }, {
                text: 'Screening Process',
                link: 'become-surrogate-part2-content'
            }, {
                text: 'How to Apply',
                link: 'become-surrogate-part3-content'
            }, {
                text: 'Why Us',
                link: 'become-surrogate-part4-1'
            }, {
                text: 'Compensation & Benefits',
                link: 'become-surrogate-part4-2'
            }]
        }, {
            text: 'About Us',
            link: '/pages/about',
        }, {
            text: 'Resources',
            link: '/pages/resources',
        }, {
            text: 'Careers',
            link: '/pages/careers',
        }],
        login:'Log In',
        search:'Search',
        appointment:'Reserve',
        login_option:[{
            text:'Intended Parents',
            link:'parent'
        },{
            text:'Surrogates',
            link:'surrogacy'
        }]
    },
    footer:[{
        text:'Intended Parents',
        link:'/pages/ParentsSection',
        options:[
            {
                text:'Surrogate Matching',
                link:'surrogacy-matching-process'
            },
            {
                text:'Single Parents & LGBTQIA+',
                link:'egg-sperm-donation-help'
            },
            {
                text:'Surrogacy Process',
                link:'surrogacy-plan-process'
            },
            {
                text:'Costs & Packages',
                link:'/pages/BecomeSurrogate'
            }
        ]
        },{
            text:'Surrogates',
            link:'/pages/BecomeSurrogate',
            options:[
                {
                    text:'Who Can Be a Surrogate',
                    link:'who-can-be-surrogate'
                },
                {
                    text:'Screening Process',
                    link:'become-surrogate-part2'
                },{
                    text:'How to Apply',
                    link:'become-surrogate-part3'
                },{
                    text:'Why Us',
                    link:'become-surrogate-part4-1'
                },{
                    text:'Compensation & Benefits ',
                    link:'become-surrogate-part4-2'
                }
            ]   
        },
        {
            text: 'About Us',
            link: '/pages/about',
        },
        {
            text: 'Resources',
            link: '/pages/resources',
        },
        {
            text: 'Careers',
            link: '/pages/careers',
        },
    ],
    footer_other:{
        title:'Explore',
        span:['Login: Intended Parents','Login: Surrogates']
    },
    about_us:[
        {
            name:'Judith Hoechst',    
            role:'Legal Team',
            content:['A reproductive law expert and former Chair of the American Society of Reproductive Medicine (ASRM) Legal Professional Group, Judith has played a pivotal role in drafting key legislation and is dedicated to legal protections and professional education.']
          },
        {
            name:'Diana E. Chavkin, MD, FACOG',    
            role:'Medical Team',
            content:['Dr. Diana Chavkin is a double board-certified expert in Reproductive Endocrinology and Infertility, currently serving as Medical Director. A recipient of multiple top doctor awards, she specializes in personalized fertility treatments.']
          },
  
        
        {
          name:'Kayla Luo',    
          role:'Co-Founder',
          content:['Co-Founder and Case Manager at Sapling Surrogacy, Kayla holds degrees from Cornell and Columbia University. Fluent in three languages, she focuses on global operations and innovation in reproductive healthcare.']
        }, {
          name:'XXX',    
          role:'XXX',
          content:['xxx']
        },
        {
          name:'XXX',    
          role:'XXX',
          content:['xxx']
        }
      ],
      about_us_title:{
        title1:'Sapling Surrogacy',
        title2:'About Us',
        desc:'A premier full-service surrogacy agency renowned for its exceptional success rates and unwavering commitment to excellence. With a team of professionals, Sapling Surrogacy provides personalized guidance and comprehensive support, ensuring a seamless and compassionate experience as you embark on the life-changing journey of building your family.',
        more:'more'
      },
      home:{
        BecomingParents:{
            title:'Become Intended Parents',
            desc:'Packages starting as low as $145,000',
            button:[{
                text:'Learn More',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'Surrogacy Costs',
                link:['/pages/surrogacy-cost'],
                auth:false
            },{
                text:'Apply Now',
                link:['/pages/auth/profile?type=parent','/pages/auth/login?mode=register'],
                auth:true
            }]
        },
        BecomingSurrogate:{
            title:'Become a Surrogate',
            desc:'Earn up to $105,000+ in compensation as a surrogate',
            button:[{
                text:'Learn More',
                link:['/pages/BecomeSurrogate'],
                auth:false
            },{
                text:'Apply Now',
                link:['/pages/auth/profile?type=appointment','/pages/auth/login?mode=registerMother'],
                auth:true
            }]
        },
        saplingSurrogacy:{
            title:'Welcome Single Parents and the LGBTQIA+ Community',
            button:[{
                text:'Learn More',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'Apply Now',
                link:['/pages/auth/profile?type=parent','/pages/auth/login?mode=register'],
                auth:true
            }]
        },
        DataDisplay:{
            title:'Sapling Surrogacy',
            desc:'Trust, Expertise, and Heartfelt SupportWith 20 years of experience, Sapling Surrogacy is a full-service agency dedicated to helping intended parents and surrogates navigate their journeys with confidence and care. Combining professional expertise with a deep commitment to building families of all kinds, we provide personalized support every step of the way.',
            data:[{
                number:'56',
                desc:'Our clients come from 56 countries worldwide.'
            },{
                number:'100+',
                desc:'Each year, we help over 100 families achieve their dreams.'
            },{
                number:'67+',
                desc:'We partner with more than 67 IVF clinics across the United States.'
            },{
                number:'99.3%',
                desc:'We proudly offer an industry-leading first-time success rate of 99.3%, ensuring greater confidence for you.'
            }]
        },
        Foundation:{
            title:'Building Families with Love: <br>Supporting More Families on Their Path to Parenthood',
            button:[{
                text:'Learn More',
                link:[''],
                auth:false
            },{
                text:'Get Involved',
                link:[''],
                auth:true
            }]
        }

    },
    parentsSection:{
        parentsSectionPart1:{
            title:'Sapling Surrogacy',
            desc:"Welcome to Sapling Surrogacy, where we're dedicated to helping you build the family you've always dreamed of. We know surrogacy can be a long and challenging journey, but you don't have to go through it alone. Sapling is here to support you every step of the way with clear guidance, personalized care, and expert answers to your questions. Because every step you take toward growing your family is worth it. With Sapling by your side, your surrogacy journey will feel seamless, supported, and truly rewarding.",
            btn:'Start Your Consultation',
            changeReason:"Why Choose Sapling Surrogacy?",
            reason:'Choosing the right surrogacy agency is key—it means having a trusted partner to guide and support you every step of the way. At Sapling Surrogacy, we offer complete, personalized services, including:',
            listData: [
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: 'Experienced Team: With years of expertise, 80% of our team has personal surrogacy experience.',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: 'Expert Legal Support: Comprehensive legal services to ensure your rights are fully protected.',
                },
                {
                  image: '/images/ParentsSection/icon3.png',
                  text: 'Personalized Medical Plans: Tailored treatment options designed to maximize your success rate.',
                },
                {
                  image: '/images/ParentsSection/icon4.png',
                  text: 'Thorough Screening Process: We work with the best surrogates and match you with the most qualified doctors.',
                },
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: 'Secure Fund Management: Your funds are safely held with full transparency and accountability.',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: 'Customizable Packages: Flexible services designed to fit your unique needs and preferences.',
                },
                {
                  image: '/images/ParentsSection/icon3.png',
                  text: 'Seamless Communication: One-stop, responsive service whenever you need us.',
                },
                {
                  image: '/images/ParentsSection/icon4.png',
                  text: 'Empathetic Team: 80% of our team has been through the surrogacy journey themselves and understands your needs.',
                },
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: 'Fast Matching Process: Our process is 40% faster than most agencies, getting you started sooner.',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: 'Transparent Pricing: All costs are clear, upfront, and free of hidden fees.',
                },
              ]

        },
        ParentsSectionPart2:{
            title:'Matching Process for Intended Parents and Surrogates',
            step:[
                {
                    title:'Step 1: Screening Applicants',
                    desc:'(Only 2% of applicants are accepted into Sapling’s surrogate database)'
                },
                {
                    title:'Step 2: Ensuring Your Surrogate is Ready',
                    desc:'(Over 90% of selected surrogates pass the second review)'
                }
            ],
            firstStep:[
                {
                    title:'1. Application',
                    text:'Every potential surrogate must complete a detailed application form to provide key information.',
                    desc:'The application includes five major sections covering reproductive history, family medical history, family life, education, financial and employment status, and motivation for becoming a surrogate. According to U.S. surrogacy regulations, surrogates must meet the following criteria:<br>● Be between 21 and 45 years old<br>● Have given birth to and raised at least one child<br>● Be in good physical health with no major medical issues<br>● Have no history of substance abuse or problems with alcohol or tobacco<br>● Maintain a healthy Body Mass Index (BMI) under 30'
                },
                {
                    title:'2. Initial Screening',
                    text:'Ensuring Readiness for Surrogacy',
                    desc:'Once the application is approved, we conduct in-depth interviews with candidates to understand their motivations and assess their ability to successfully complete the surrogacy journey. We partner with trusted third-party agencies to perform thorough background checks on both applicants and their partners. These checks include evaluations of family dynamics, financial stability, living conditions, and criminal history. Partner clinics carry out medical assessments, reviewing uterine health, pregnancy history, and any history of substance use. To ensure psychological readiness, candidates also undergo evaluations by licensed mental health professionals.'
                },
                {
                    title:'3. Education and Support',
                    text:'Equipping Surrogates for the Journey',
                    desc:'After passing background and medical checks, candidates begin regular educational sessions with our team. These sessions provide surrogates with a clear understanding of each stage of the surrogacy process and set expectations for the journey. We maintain close communication with surrogates to monitor their physical and emotional well-being, ensuring they are fully supported and prepared every step of the way.'
                }
            ],
            secondStep:[
                {
                    title:'1. Additional Medical and Psychological Evaluations',
                    desc:'After intended parents choose a surrogate from our database, she undergoes a second round of evaluations to confirm she still meets all qualifications for surrogacy. These include updated medical and psychological screenings to ensure she’s fully prepared for the journey ahead.'
                },
                {
                    title:'2. Clinic-Based Health Assessment',
                    desc:'The IVF clinic coordinates a thorough health check based on the surrogate’s menstrual cycle, typically scheduled a few days before or after her period. The goal is to assess the condition of her uterus and confirm she’s ready for embryo transfer and pregnancy. Results usually take about three weeks.'
                }
            ],
            button:{
                text:'Start Your Consultation'
            }
        },
        ParentsSectionPart3:{
            title:'Surrogacy Journey for Intended Parents',
            context:[
                'The surrogacy journey is a process filled with important milestones and steps. ',
                'Each intended parent’s journey is unique, shaped by their individual circumstances, needs, and preferences.',
                'Typically, after 12–24 months, you will be able to welcome your baby home.',
                ' During this time, Sapling’s professional team will provide one-on-one guidance and support to ensure your surrogacy experience is smooth and stress-free.',
                'To help you better understand the surrogacy process, the goals of each stage, ',
                'and the approximate timeline, we have divided the journey into five main phases for your reference.'
            ],
            step:[
                {
                    title:'Step 1',
                    desc:'Consultation and Signing (0–1 Month)',
                    context:[
                        'You can book a consultation through our website, contact our support team, or chat with us online to find a time that works for you.',
                        'During your first consultation, we’ll walk you through our services and create a personalized plan based on your unique needs and goals.',
                        'Once you choose Sapling Surrogacy and sign the agreement, ',
                        'our team will take care of everything—from finding the perfect surrogate to helping you choose the right IVF clinic,',
                        'and even connecting you with trusted egg and sperm banks if needed.'
                    ]
                },
                {
                    title:'Step 2',
                    desc:'Matching with a Surrogate (Timeline Varies)',
                    context:[
                        'All of our surrogates go through a rigorous screening process. ',
                        'Based on your preferences and needs, we’ll provide you with a selection of candidates from our surrogate database, allowing you to choose the best match.',
                        'Once the match is confirmed, Sapling Surrogacy will guide you and your surrogate through the next steps, clearly outlining the key milestones in the process. ',
                        'This includes everything from legal agreements and medical plans to fund management and insurance,',
                        'ensuring your surrogacy journey is smooth, transparent, and stress-free.'
                    ]
                },
                {
                    title:'Step 3',
                    desc:'IVF and Legal Agreements (3–4 Months)',
                    context:[
                        'If you don’t have frozen embryos or a preferred IVF clinic, ',
                        'we’ll recommend one based on your location and needs and arrange a consultation. ',
                        'Once confirmed, we’ll help plan your embryo development, including timelines, costs, and medications, and coordinate travel if needed.',
                        ' After embryo screening, the surrogate undergoes medical checks to ensure readiness. ',
                        'Then, lawyers will finalize and notarize the agreement.',
                        'Finally, the clinic prepares the surrogate for embryo transfer with a seven-week medication protocol.'
                    ]
                },
                {
                    title:'Step 4',
                    desc:'Surrogate Pregnancy (8–9 Months)',
                    context:[
                        'From embryo transfer to the 12th week, the surrogate undergoes regular HCG blood tests and ultrasounds, ',
                        'with the heartbeat and gestational sac detected around weeks 5–7.',
                        'Once stable, she transitions to her local OB-GYN for routine checkups—every 4 weeks until week 28, every 2 weeks until week 36, and weekly until delivery. ',
                        'During this time, you can stay in touch with the surrogate, and we’ll provide regular updates. ',
                        'We’ll also assist with parentage documents after week 18 to establish your legal parental rights and work with you and the surrogate to finalize the birth plan for a smooth delivery.',                 
                    ]
                },
                {
                    title:'Step 5',
                    desc:'Welcoming Your Baby Home',
                    context:[
                        'When the doctor clears your baby for discharge, it’s time for the happiest moment—taking your baby home. ',
                        'For U.S.-based parents, this usually means heading home within a few days. ',
                        'For international parents, a stay of around four weeks may be needed to handle the baby’s passport and other required documents. ',
                        'Sapling Surrogacy will be by your side throughout the process, ',
                        'making sure everything goes smoothly so you can focus on starting this wonderful new chapter with your baby.',
                    ]
                }
            ],

            buttonText:'Start Your Consultation'

        },
        parentsSectionPart4:{
            title_first:'Single Parents and LGBTQIA+ Community',
            title_second:'Egg and Sperm Donor Support',
            text_desc:"If you’re a single parent, part of a same-sex couple, or unable to use your own eggs or sperm, choosing a qualified donor can help you build your family. Our rigorously screened donors aren’t just motivated by compensation—they’re passionate about helping others achieve parenthood. Through partnerships with top egg and sperm banks in the U.S., we offer a wide range of high-quality options.",
            desc:'套餐价格低至 145,000 美元',
            process:"How to Choose Egg/Sperm Donors and Partner Banks",
            part1:{
                title:'If You’re Working with an Egg/Sperm Donor, Here’s What to Expect:',
                first_need:"1.Selecting a DonorAfter signing the agreement, you can choose a donor based on your preferred characteristics like hair color, eye color, height, ethnicity, and location. Our team will help you find the right match. You can review the donor’s profile, including personal details, health, education, family history, and photos, and even schedule a virtual meeting for a closer understanding.",
                second_need:"2.Starting the Donation Process Once selected, the donor will visit your chosen IVF clinic for medical screening and medication preparation before providing fresh eggs or sperm, allowing you to begin your family-building journey.",
            },
            part2:{
                title:'If You’re Working with an Egg/Sperm Bank, Here’s What to Expect:',
                first_need:"1.Choose a Donor After completing your registration, a representative from our partner egg/sperm bank will provide you with a list of donors. You’ll have the chance to review their profiles and select the donor that feels like the right fit for you.",
                second_need:"2.Start the Process Once you’ve chosen your donor, we’ll work with the egg/sperm bank to help you purchase frozen eggs or sperm. From there, we’ll assist you in beginning the embryo development process, bringing you one step closer to growing your family.",
            },
            btn:'Start Your Consultation' 
        }
    },
    surrogacyCost:{
        title:'Sapling’s Package Options',
        desc:'At Sapling, we offer two package options tailored to fit your unique needs, so you can choose what works<br>best for you. No matter which package you select, our goal is to provide you with a seamless and<br>supportive experience, guiding you every step of the way on this meaningful journey.',
        sproutPackage:{
            title:'Sprout Package',
            desc:'$145,000 to $210,000',
            list:[
                {
                    title:'Agency Service Fees',
                    desc:'Sapling manages the entire surrogacy process, including matching surrogates, coordinating parties, and providing ongoing support. Services include surrogate screening, psychological evaluations, background checks, and consistent communication to ensure a smooth experience.'
                },
                {
                    title:'Medical Expenses',
                    desc:'Sapling partners with CDC-certified IVF clinics nationwide, offering top-tier doctors and advanced facilities. Medical costs cover IVF procedures, surrogate health screenings, prenatal care, delivery, hospitalization, and necessary medications, ensuring safety and professionalism throughout the process.'
                },
                {
                    title:'Legal Fees',
                    desc:'To ensure clarity and protection for all parties, Sapling works with the Vice President of the American Surrogacy Association and a team of experienced attorneys to draft, review, and execute surrogacy agreements. We also manage the legal processes for parentage confirmation and birth certificate updates, providing comprehensive legal support throughout the surrogacy journey.'
                },
                {
                    title:'Trust Account Management Fees',
                    desc:'Sapling partners with the largest trust companies in the U.S. to establish and manage secure trust accounts for each client. These accounts are used for all surrogacy-related payments, ensuring transparency and compliance with contractual terms. Management fees include account setup, maintenance, and regular financial reporting to guarantee safety and accountability.'
                },
                {
                    title:'Surrogate Compensation',
                    desc:'Sapling’s surrogates, many of whom are military spouses or church members, receive thoughtful and comprehensive compensation. This includes base compensation for the time, effort, and health risks involved, as well as living allowances for expenses like transportation, nutrition, and maternity clothing. Additional compensation is provided for specific situations, such as twin pregnancies or C-sections, ensuring surrogates are fully supported and their contributions are valued.'
                }
            ]
        },
        thrivePackage:{
            title:'Thrive Package',
            desc:'$260,000 to $295,000',
            list:[
                {
                    title:'Agency Service Fees',
                    desc:'Sapling manages the entire surrogacy process, including matching surrogates, coordinating parties, and providing ongoing support. Services include surrogate screening, psychological evaluations, background checks, and consistent communication to ensure a smooth experience.'
                },
                {
                    title:'Medical Expenses',
                    desc:'Sapling partners with CDC-certified IVF clinics nationwide, offering top-tier doctors and advanced facilities. Medical costs cover IVF procedures, surrogate health screenings, prenatal care, delivery, hospitalization, and necessary medications, ensuring safety and professionalism throughout the process.'
                },
                {
                    title:'Legal Fees',
                    desc:'To ensure clarity and protection for all parties, Sapling works with the Vice President of the American Surrogacy Association and a team of experienced attorneys to draft, review, and execute surrogacy agreements. We also manage the legal processes for parentage confirmation and birth certificate updates, providing comprehensive legal support throughout the surrogacy journey.'
                },
                {
                    title:'Trust Account Management Fees',
                    desc:'Sapling partners with the largest trust companies in the U.S. to establish and manage secure trust accounts for each client. These accounts are used for all surrogacy-related payments, ensuring transparency and compliance with contractual terms. Management fees include account setup, maintenance, and regular financial reporting to guarantee safety and accountability.'
                },
                {
                    title:'Surrogate Compensation',
                    desc:'Sapling’s surrogates, many of whom are military spouses or church members, receive thoughtful and comprehensive compensation. This includes base compensation for the time, effort, and health risks involved, as well as living allowances for expenses like transportation, nutrition, and maternity clothing. Additional compensation is provided for specific situations, such as twin pregnancies or C-sections, ensuring surrogates are fully supported and their contributions are valued.'
                },
                {
                    title:'Travel Arrangements',
                    desc:'Sapling offers full-service travel coordination to ensure a smooth and stress-free experience throughout your surrogacy journey. Our team assists with booking transportation and accommodations for visits to IVF clinics or surrogacy-related appointments, planning detailed itineraries, and arranging additional services such as airport transfers and car rentals. Whether you’re traveling for routine checkups or to welcome your baby, we manage every detail to provide a seamless and convenient travel experience.'
                },
                {
                    title:'Concierge Services',
                    desc:'Sapling’s concierge services deliver tailored, full-service support throughout the surrogacy journey. Our team takes care of every detail, including scheduling medical appointments, managing legal documentation, coordinating surrogacy-related tasks, overseeing fund management, and providing real-time communication and updates. From significant milestones to everyday logistics, we handle everything with efficiency and care, ensuring a seamless and stress-free experience for our clients.'
                },
                {
                    title:'Comprehensive Insurance',
                    desc:'Sapling offers comprehensive insurance designed to protect against potential risks during the surrogacy process. Whether it’s a failed embryo transfer, an unexpected miscarriage, or other unforeseen events, we cover all associated costs, relieving clients of additional financial burdens. This all-encompassing insurance is designed to eliminate uncertainty, providing clients with peace of mind and a secure, worry-free surrogacy experience.'
                }
            ]
        },
        questionAndAnswer:[
            {
                title:'What Sets the Thrive Package Apart?',
                desc:'The Thrive Package offers unparalleled comprehensive coverage and peace of mind. Beyond standard surrogacy services, it includes all-encompassing insurance that covers a range of potential risks, from failed embryo transfers to unexpected miscarriages, ensuring clients face no additional costs for unforeseen circumstances. This package also features enhanced concierge services, providing seamless, end-to-end support for every aspect of the journey. From managing medical appointments to arranging travel and offering real-time assistance, every detail is handled by a dedicated team. The Thrive Package’s core benefits are its enhanced security, streamlined process management, and a fully integrated, one-stop solution, delivering a stress-free and worry-free surrogacy experience.'
            },
            {
                title:'How Are Surrogacy Payments Made?',
                desc:'Each client is assigned a dedicated trust account, ensuring secure and transparent fund management. Payments are disbursed only when specific contractual conditions are met, with regular financial reporting provided by the trust company. The payment process typically occurs in two stages: an initial deposit is made upon confirming the surrogate or signing the service agreement, followed by subsequent installments covering the surrogate’s living expenses and medical costs. These payments are released in alignment with the timeline or milestones specified in the contract. This structured approach safeguards proper fund usage and protects the interests of all parties involved.'
            },
            {
                title:'If You Don’t Yet Have Embryos',
                desc:'If you have not yet frozen embryos, selected an IVF clinic, or require assistance finding an egg or sperm donor, Sapling can provide you with a carefully vetted list of highly qualified doctors and clinics. Based on your specific needs and location, you can choose the most suitable option, or we can coordinate directly with a clinic on your behalf to ensure a smooth and efficient transition to the next stage of your journey.'
            }
        ]

        
    },
    careers:{
        title:'Careers',
        firstDesc:'Sapling Surrogacy is dedicated to partnering with top professionals to deliver exceptional services to our<br>clients. Join us, and you’ll become part of a highly successful and passionate team, upholding the trust<br>and outstanding reputation we’ve built in the industry.',
        secondDesc:'<p>To explore available opportunities, please visit our LinkedIn page.</p>'
    },
    resources:{
        title1:'Blog',
        title2:'Testimonials',
        blogMenu:[
            {
                text:'Intended Parents',
            },
            {
                text:'Surrogates',
            }
        ],
        intendedParentList:[
            {
                image:'/images/resources/list1.png',
                title:'Considering becoming an egg donor? Here are 5 reasons why you should definitely do it',
                desc:'As an egg donor, what you provide is essential—none of this could happen without you. But why should you consider becoming an egg donor? Here are 5 reasons why egg donation could be a good path for you.'
            },
            {
                image:'/images/resources/list1.png',
                title:'Considering becoming an egg donor? Here are 5 reasons why you should definitely do it',
                desc:'As an egg donor, what you provide is essential—none of this could happen without you. But why should you consider becoming an egg donor? Here are 5 reasons why egg donation could be a good path for you.'
            },
            {
                image:'/images/resources/list1.png',
                title:'Considering becoming an egg donor? Here are 5 reasons why you should definitely do it',
                desc:'As an egg donor, what you provide is essential—none of this could happen without you. But why should you consider becoming an egg donor? Here are 5 reasons why egg donation could be a good path for you.'
            },
            {
                image:'/images/resources/list1.png',
                title:'Considering becoming an egg donor? Here are 5 reasons why you should definitely do it',
                desc:'As an egg donor, what you provide is essential—none of this could happen without you. But why should you consider becoming an egg donor? Here are 5 reasons why egg donation could be a good path for you.'
            },
            {
                image:'/images/resources/list1.png',
                title:'Considering becoming an egg donor? Here are 5 reasons why you should definitely do it',
                desc:'As an egg donor, what you provide is essential—none of this could happen without you. But why should you consider becoming an egg donor? Here are 5 reasons why egg donation could be a good path for you.'
            }
        ],
        surrogateMomList:[
            {
                image:'/images/resources/list3.png',
                title:'Considering becoming an egg donor? Here are 5 reasons why you should definitely do it',
                desc:'As an egg donor, what you provide is essential—none of this could happen without you. But why should you consider becoming an egg donor? Here are 5 reasons why egg donation could be a good path for you.'
            }
        ],
        reviewList:[
            {
                name: 'Emily & Michael T.',
                content: 'We are forever grateful to Sapling Surrogacy for making our dream of parenthood come true. From the very first consultation to the day we held our baby in our arms, their team was there every step of the way with care, professionalism, and unwavering support. The attention to detail and compassion shown throughout the process were unparalleled. Thank you, Sapling, for helping us complete our family!'
            },
            {
                name: 'Sarah & Jonathan L.',
                content: 'Choosing Sapling Surrogacy was the best decision we ever made. The team made an overwhelming process feel manageable and even joyful. They guided us through every step with empathy and expertise, and we felt truly cared for the entire time. Thanks to Sapling, we are now proud parents to a beautiful baby girl. We cannot thank them enough for their dedication and support.'
            },
            {
                name: 'Jessica M.',
                content: 'Being a surrogate with Sapling Surrogacy has been one of the most rewarding experiences of my life. From the very beginning, their team supported me every step of the way, ensuring I felt valued, cared for, and informed. They handled every detail with professionalism and kindness, and their dedication made the entire journey smooth and fulfilling. I am so proud to have been part of helping a family achieve their dream. Thank you, Sapling, for creating such a supportive and meaningful experience!'
            },
            {
                name: 'XXXXXX',
                content: 'XXXXXX'
            },
            {
                name: 'XXX',
                content: 'XXXX'
            },
        ],
        btn:'Load More',
        btnText:'No More',
        btnText2:'Read More'
    },
    login:{
        title_1:"Welcome to Sapling Surrogacy",
        title_2:"Welcome to Sapling Surrogacy",
        login_type:"Please log in using your email address",
        email:"Email Address",
        password:"Password",
        remember:"Remember Me",
        forgot_password:"Forgot Password?",
        login_btn:"Log In",
        login_loading:"Logging In",
        register_title:"Create a New Account",
        register_desc:"If this is your first time requesting information or applying to our program, please create an account to begin your journey.",
        register_btn:"Create Account"}
}