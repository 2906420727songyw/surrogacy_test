export default {
    test:'test',
    language:'EN/中文',
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
        title:'About Us',
        desc:'假文案,这世界上有1/6的人因为个人原因,无法组成完整的家庭,他们梦想着能够抱着自己的孩子入睡,渴望看到宝宝在自己的呵护下长大。因为代孕妈妈无私的帮助,让这一切都变得有可能,代孕妈妈的无私奉献让更多有需要的人能够成为了父亲和母亲。Sapling感谢每个愿意成为代孕母的人,并希望能够给与所有代孕母亲最好的帮助和关怀,照顾好代孕母亲的身体健康和信力建看的同时,我们会尽量去给所有的代孕母都争取更多的薪水',
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
        }
    }
}