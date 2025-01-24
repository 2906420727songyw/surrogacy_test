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
    },
    parentsSection:{
        parentsSectionPart1:{
            title:'小树苗代孕中心',
            desc_list:[
                "欢迎来到小树苗代孕中心",
                "协助您实现幸福美满的家庭梦想是我们最大的心愿。",
                "代孕是一段漫长、充满挑战但无比伟大的旅程。",
                "若您在过程中感到迷茫或无助，请放心，",
                "小树苗将始终陪伴在您身边，耐心解答您的疑问并提供全面支持。",
                "我们坚信，每一份付出都值得。",
                "有小树苗的陪伴，您的代孕之旅将更加安心、顺畅且充满喜悦。"
            ],
            btn:'开始咨询',
            changeReason:"为什么准父母会选择小树苗代孕中心",
            reason:'选择一家专业的代孕机构至关重要，它将引导并陪伴您顺利、轻松地完成成为准父母的整个旅程。选择小树苗代孕中心，您将享受全方位的代孕服务。我们拥有：',
            listData: [
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: '最有经验的团队：团队成员拥有多年行业经验，80%亲历代孕旅程。',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: '最专业的法律团队：完善的法律支持，全方位保障您的合法权益。',
                },
                {
                  image: '/images/ParentsSection/icon3.png',
                  text: '最合适的医疗选择：根据您的情况量身定制治疗方案，提升成功率。',
                },
                {
                  image: '/images/ParentsSection/icon4.png',
                  text: '最严格的筛选机制：甄选最优质的代孕母亲和最适合您的医生。',
                },
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: '最大的资金信托公司：资金托管安全透明，所有使用清晰可查。',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: '最完善的定制化套餐：根据需求灵活定制，满足您的所有服务要求。',
                },
                {
                  image: '/images/ParentsSection/icon3.png',
                  text: '最高效的交流：一站式服务，随时为您提供快速响应和支持。',
                },
                {
                  image: '/images/ParentsSection/icon4.png',
                  text: '最能理解客户的团队：80%的团队成员有亲身代孕经验，深刻理解您的感受。',
                },
                {
                  image: '/images/ParentsSection/icon1.png',
                  text: '最快速的匹配流程：匹配流程比普通机构快40%，让您更快开始代孕旅程。',
                },
                {
                  image: '/images/ParentsSection/icon2.png',
                  text: '最透明的价格：所有费用透明公开，无任何隐藏收费。',
                },
              ]
        },
        parentsSectionPart4:{
            title:'成为准父母',
            desc:'套餐价格低至 145,000 美元',
        }
    }
}