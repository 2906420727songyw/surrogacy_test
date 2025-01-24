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
    ParentsSection:{
        ParentsSectionPart2:{
            title:'准父母和代孕妈妈的匹配过程',
            step:[
                {
                    title:'第一步：',
                    desc:'筛选申请者（ 2% 的申请者才能进入 Sapling 的代孕母库）'
                },
                {
                    title:'第二步：',
                    desc:'选定的代孕妈妈是否合适（90%以上可以通过二次审核）'
                }
            ],
            firstStep:[
                {
                    title:'1. 申请',
                    text:'每位代孕妈妈必须填写一份详细的申请表，了解她的必要基本信息',
                    desc:'每位代孕妈妈都必须完成我们的申请表，一共有五个大类，涵盖了生育历史、家族病史、家庭生活、学历、<br>财政情况和工作情况以及代孕动机。根据美国代孕法案规定，代孕妈妈必须在 21-45 岁之间，生产并养育过至少一个孩子，<br>身体健康，无重大疾病，无药物滥用或烟酒问题，健康指数（BMI）在 30 以下。'
                },
                {
                    title:'2. 初步检查',
                    text:'第三方机构协助调查申请者及其伴侣，保证其生理和心理同时符合标准',
                    desc:'在申请表审核通过之后，我们将会有专业的人员进行对接，有助于我们深入了解她们的代孕申请，并评估候选人完成代孕过程的能力。<br>同时，我们聘请了专业的第三方机构进行协助，他们会对申请者及其伴侣进行背景调查（包括家庭情况、收入情况、居住情况、犯罪历史背景等），<br>合作的第三方医院对其进行前期的身体检查（包括子宫情况、怀孕历史、吸烟酗酒毒品史等），<br>以及专业的心理医生进行心理评估，保证他们在身体和心理上同时适合做代孕妈妈。'
                },
                {
                    title:'3. 科普教育',
                    text:'通过教育和沟通保证代孕妈妈对这方面准备',
                    desc:'在背景审核和身体健康检查都通过后，我们将会有专业的工作人员和代孕妈妈对接，进行定期的科普教育，<br>让他们更了解代孕的所有过程。同时，紧密的联系也能让我们随时掌握代孕妈妈候选人的生活状态和健康状态，<br>保证她们健康的身体和心理状态。'
                }
            ],
            secondStep:[
                {
                    title:'1. 二次身体检查',
                    desc:'在准父母从我们的代母库里选定好代孕妈妈后，我们将对其进行第二次的身体检查和心理筛查，<br>以确保其现在依旧具备成为代孕妈妈的资格。'
                },
                {
                    title:'2. 医院体检',
                    desc:'试管医院将会按照代孕妈妈的月经周期，在她月经前后几天安排体检，<br>体检结果大概需要三周时间，其目的是为了检查子宫情况，以确定其移植和备孕状态。'
                }
            ],
            button:{
                text:'开始咨询'
            }
        }
    }
}