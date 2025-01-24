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
        },
        ParentsSectionPart3:{
            title:'准父母代孕流程',
            context:[
                '代孕是一段充满重要节点和步骤的旅程，',
                '每对准父母都会根据自身的情况、需求和偏好，形成独特的时间线和体验。',
                '通常情况下，经过 12-24 个月的时间，您就能迎接宝宝回家。',
                '在此期间，小树苗专业团队将全程为您提供一对一陪伴与支持，确保您的代孕之旅顺利无忧。',
                '为了帮助您更清晰地了解代孕流程、各阶段的目标及预期结果，',
                '以及大致的时间安排，我们将代孕旅程划分为五个主要阶段，供您参考。'
            ],
            step:[
                {
                    title:'第一步',
                    desc:'咨询与签约（0-1个月）',
                    context:[
                        '您可以通过网站预约、联系我们的客服或使用在线对话功能选择适合的咨询时间。',
                        '在首次咨询中，您将了解更多关于我们的信息，',
                        '我们也会根据您的具体情况、需求和期望，为您提供个性化的解决方案。',
                        '一旦您选择小树苗代孕中心并签约，我们的专业团队将与您对接，全面规划您的代孕旅程，',
                        '包括匹配代孕妈妈、协助选择试管医院，以及通过合作的卵子库和精子库满足您的额外需求。',
                    ]
                },
                {
                    title:'第二步',
                    desc:'代孕妈妈的双向匹配（时间因人而异）',
                    context:[
                        '所有代孕妈妈都经过严格筛选，我们会根据您的需求和偏好为您推荐多位候选人，',
                        '让您从我们的代孕母库中选择最适合的一位。',
                        '一旦匹配成功，小树苗代孕中心将为您和代孕妈妈详细解读接下来的流程，',
                        '包括每个关键时间节点的安排，以及涉及的法律事务、医疗计划、资金信托管理和保险服务，',
                        '确保整个代孕旅程清晰透明且顺利推进。']
                },
                {
                    title:'第三步',
                    desc:'试管医院与法律文件（3-4个月）',
                    context:[
                        '如果您没有冷冻胚胎或未选择试管医院，',
                        '我们会根据您的地理位置和需求推荐合作医院并安排医生面诊。',
                        '确认后，我们将规划胚胎培育计划，包括时间表、费用和用药方案，并合理安排您的行程。',
                        '胚胎筛选成功后，代孕妈妈需通过身体检查（子宫内膜和激素水平检测），',
                        '随后进入法律程序。律师将协助双方签署并公证合同。',
                        '完成后，试管医院将安排代孕妈妈进行胚胎移植的准备，并在约七周药物准备后完成胚胎移植。', 
                    ]
                },
                {
                    title:'第四步',
                    desc:'代孕妈妈怀孕（8-9个月）',
                    context:[
                        '从胚胎移植到第12周，代孕妈妈会定期接受HCG血液检查和超声波检查，',
                        '确保胚胎健康发育，第5-7周即可检测到胎心和胎囊位置。',
                        '一切顺利后，她将转到居住地的妇产科医生处进行常规产检，',
                        '第12周起每4周一次，第28周起每2周一次，第36周起每周一次，直至分娩。',
                        '在此期间，您可以随时与代孕妈妈保持联系，我们也会定期向您汇报代孕进展。',
                        '同时，我们将协助您完成亲权文件和分娩计划的准备工作：',
                        '亲权文件在怀孕第18周由律师起草，确保您的合法父母身份；',
                        '分娩计划则在孕后期与代孕妈妈共同商定，确保分娩当天的安排万无一失。',
                    ]
                },
                {
                    title:'第五步',
                    desc:'迎接宝宝的出生',
                    context:[
                        '当医生确认宝宝可以出院时，您将迎来与宝宝团聚的幸福时刻。',
                        '美国本地的父母通常可在宝宝出院后的几天内回家，',
                        '而海外父母需在美国停留约4周，以完成护照等必要手续。',
                        '小树苗代孕中心将全程陪伴并协助您处理所有流程，',
                        '确保您顺利抱着宝宝回家，开启美满的新生活。',
                    ]
                }
            ],

            buttonText:'开始咨询'

        },
        parentsSectionPart4:{
            title_first:'单身父母和 LGBTQIA+ 群体',
            title_second:'卵子和精子捐赠者的帮助',
            text_list:['如果您是单身父母、同性伴侣，或因身体原因无法使用自己的卵子或精子，选择一位优秀的卵子',
                '或精子捐赠者将帮助您实现拥有家庭的梦想。我们的卵子和精子捐赠者都经过严格筛选。他们参',
                '与捐赠不仅仅是为了报酬，更是为了通过自己的努力帮助他人实现家庭梦想。我们与全美知名的',
                '卵子和精子库合作，致力于为您提供更多高质量的选择。'
            ],
            desc:'套餐价格低至 145,000 美元',
            process:"选择卵子/精子捐赠者与卵子精子库的流程",
            part1:{
                title:'如果您选定某个卵子/精子捐赠者，您需要：',
                first_need:"1.挑选捐赠者签约后，您可以根据理想的特征（如头发颜色、眼睛颜色、身高、种族背景、地域等）进行筛选，我们的团队将协助您找到符合您需求的捐赠者。选定后，您可以查看捐赠者的详细信息，包括基本资料、教育背景、健康状况、生育历史、家庭情况以及家族遗传史。此外，您还可以浏览他们的照片和视频，并预约线上见面，直观了解捐赠者。",
                second_need:"2.开始捐赠流程确定捐赠者后，捐赠者将前往您选择的试管医院接受医学筛查，并根据要求进行药物治疗，准备取卵/精。随后，新鲜的卵子或精子将供您使用，开启您的家庭之旅。",
            },
            part2:{
                title:'如果您选择某个卵子/精子库，您需要：',
                first_need:"1.选择捐赠者注册成功后，我们合作的卵子/精子库工作人员将加入协助，为您提供捐赠者名单，帮助您筛选并确定心仪的捐赠者。",
                second_need:"2.	开始捐赠流程确认捐赠者后，我们与卵子/精子库的工作人员将协助您从库中购买冷冻卵子或精子，并启动胚胎培育过程，为您的家庭梦想迈出关键一步。",
            },
            btn:'开始咨询'
        }
    } 
}