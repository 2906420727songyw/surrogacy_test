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
    }
}