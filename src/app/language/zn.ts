export default {
    test:'测试',
    language:'EN',
    header:{
        title: "小树苗代孕中心",
        options:[{
            text: '成为准父母',
            link: '/pages/ParentsSection',
            options: [{
                text: '代孕妈妈的匹配过程',
                link: 'surrogacy-matching-process'
            }, {
                text: '单身父母和 LGBTQIA+ 群体',
                link: 'egg-sperm-donation-help'
            }, {
                text: '代孕计划和流程',
                link: 'surrogacy-plan-process'
            }, {
                text: '代孕套餐和费用',
                link: '/pages/surrogacy-cost'
            }]
        }, {
            text: '成为代孕妈妈',
            link: '/pages/BecomeSurrogate',
            options: [{
                text: '谁可以成为代孕妈妈',
                link: 'who-can-be-surrogate'
            }, {
                text: '怎么筛选申请者',
                link: 'become-surrogate-part2-content'
            }, {
                text: '如何成为代孕妈妈',
                link: 'become-surrogate-part3-content'
            }, {
                text: '为什么选择我们',
                link: 'become-surrogate-part4-1'
            }, {
                text: '薪酬和补偿',
                link: 'become-surrogate-part4-2'
            }]
        }, {
            text: '关于我们',
            link: '/pages/about',
        }, {
            text: '资讯',
            link: '/pages/resources',
        }, {
            text: '职业生涯',
            link: '/pages/careers',
        }],
        login:'登录',
        search:'搜索',
        appointment:'预约',
        login_option:[{
            text:'成为准父母',
            link:'parent'
        },{
            text:'成为代孕妈妈',
            link:'surrogacy'
        }]
    },
    footer:[{
        text:'如何成为准父母',
        link:'/pages/ParentsSection',
        options:[
            {
                text:'代孕妈妈匹配过程',
                link:'surrogacy-matching-process'
            },
            {
                text:'单身父母和 LGBTQIA+ 群体',
                link:'egg-sperm-donation-help'
            },
            {
                text:'代孕计划和流程',
                link:'surrogacy-plan-process'
            },
            {
                text:'代孕套餐和费用',
                link:'/pages/BecomeSurrogate'
            }
        ]
    },{
        text:'如何成为代孕妈妈',
        link:'/pages/BecomeSurrogate',
        options:[
            {
                text:'谁可以成为代孕妈妈',
                link:'who-can-be-surrogate'
            },
            {
                text:'怎么筛选申请者',
                link:'become-surrogate-part2'
            },{
                text:'如何成为代孕妈妈',
                link:'become-surrogate-part3'
            },{
                text:'为什么选择我们',
                link:'become-surrogate-part4-1'
            },{
                text:'薪酬和补偿',
                link:'become-surrogate-part4-2'
            }
        ]   
    },
    {
        text: '关于我们',
        link: '/pages/about',
    },
    {
        text: '资讯',
        link: '/pages/resources',
    },
    {
        text: '职业生涯',
        link: '/pages/careers',
    },
    ],
    footer_other:{
        title:'探索',
        span:['登录：成为准父母','登录：成为代孕妈妈']
    },
    about_us:[
        {
            name:'Judith Hoechst',    
            role:'律师团队',
            content:['作为生殖法律专家，曾任美国生殖医学学会（ASRM）法律专业组主席，起草多项立法，致力于法律保护与专业教育。']
          },
        
        {
            name:'Diana E. Chavkin, MD, FACOG',    
            role:'医生团队',
            content:['Dr. Diana Chavkin 是双重认证的生殖内分泌与不孕症专家，现任医疗总监，荣获多项顶级医生奖，专注个性化生育治疗。']
        },
        
        
        {
          name:'Kayla Luo',    
          role:'联合创始人',
          content:['Sapling Surrogacy 联合创始人兼案例经理，拥有康奈尔与哥大学位，精通三语，专注全球化运营与生殖医疗创新']
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
        title1:'小树苗代孕中心',
        title2:'关于我们',
        desc:'行业领先的全方位服务代孕机构，<br>以卓越的成功率和贴心的专业支持，致力于为每一位客户打造安心、温暖的家庭梦想之旅',
        more:'了解更多'
      },
      home:{
        BecomingParents:{
            title:'成为准父母',
            desc:'套餐价格低至 145,000 美元',
            button:[{
                text:'了解更多',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'代孕费用',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'申请通道',
                link:['/pages/auth/profile?type=parent','/pages/auth/login?mode=register'],
                auth:true
            }]
        },
        BecomingSurrogate:{
            title:'成为代孕妈妈',
            desc:'成为代孕妈妈，最高可获报酬 105,000+ 美元',
            button:[{
                text:'了解更多',
                link:['/pages/BecomeSurrogate'],
                auth:false
            },{
                text:'申请通道',
                link:['/pages/auth/profile?type=appointment','/pages/auth/login?mode=registerMother'],
                auth:true
            }]
        },
        saplingSurrogacy:{
            title:'欢迎单身父母和 LGBTQIA+ 群体',
            button:[{
                text:'了解更多',
                link:['/pages/ParentsSection'],
                auth:false
            },{
                text:'申请通道',
                link:['/pages/auth/profile?type=appointment','/pages/auth/login?mode=registerMother'],
                auth:true
            }]
        },
        DataDisplay:{
            title:'小树苗代孕中心',
            desc:'专业铸就成功，热情赢得信赖。<br>作为一家全方位服务的代孕机构，小树苗专注于为准父母和代孕者提供专业支持与丰富经验。凭<br>借20年来助力多元家庭成长的热忱，我们陪伴您实现家庭梦想的每一步。',
            data:[{
                number:'56',
                desc:'我们的客户遍布全球56个国家'
            },{
                number:'100+',
                desc:'我们每年帮助超过100个家庭实现梦想'
            },{
                number:'67+',
                desc:'我们与全美超过67家试管医院建立了合作关系'
            },{
                number:'99.3%',
                desc:'我们有行业领先的99.3%一次成功率，为您提供更高保障'
            }]
        },
        Foundation:{
            title:'用爱筑梦：基金会帮助更多不孕家庭拥有孩子',
            button:[{
                text:'了解更多',
                link:[''],
                auth:false
            },{
                text:'加入我们',
                link:[''],
                auth:true
            }]
        }
    }
}