### Module - imports
- imports는 NestJS 모듈의 종속성을 정의하는 배열로, 다른 모듈을 현재 모듈에서 사용할 수 있도록 설정하는 역할
- NestJS는 모듈 기반 아키텍처를 채택하고 있기 때문에, 각 모듈이 다른 모듈의 기능이나 서비스를 가져오기 위해서는
imports를 통해 의존성을 주입해야 함

1. `정적 모듈` : 모듈을 바로 주입하는 경우
    ~~~
    EX)
    imports: [
        // 해당 모듈에서 사용할 다른 모듈 주입 (의존성 주입)
        MemberModule,
        OrderModule,
    ]
    ~~~

2. `동적 모듈` : 모듈 설정 값이나 옵션을 전달해서 모듈을 동적으로 생성
   - 2-1) 동기적 전역 설정 : forRoot 사용 - 전역적으로 애플리케이션 전체에서 사용할 수 있는 설정을 적용하는 경우
        ~~~
        EX)
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
            }),
        ],
        ~~~
     
   - 2-2) 동기적 특정 모듈 전용 설정 : forFeature 사용 - 특정 모듈에서만 사용할 수 있는 설정이나 엔티티(모델)을 주입하는 경우
        ~~~
        EX)
        imports: [
            // Member, Order 엔티티(모델) 주입
            TypeOrmModule.forFeature(
                [Member, Order]
            )
        ],
        ~~~

   - 2-3) 비동기적 설정 : forRootAsync 사용 - 설정값이 비동기적으로 제공되어야 할 때, 주로 환경 변수나 외부 API 요청을 통해 설정을 주입하는 경우
        ~~~
        EX-1)
        imports: [
            TypeOrmModule.forRootAsync({
                imports: [ConfigModule],
                useFactory: (configService: ConfigService) =>
                configService.get('DB정보'),
                inject: [ConfigService],
            }),
        ]
        // 이 방법을 사용하면 설정이 비동기적으로 로드되고, 환경 변수나 설정값이 완료된 후에 모듈이 로드됨
        ~~~
        ~~~
   	    EX-2-1)
   		imports: [
   			ConfigModule.forRoot({
   				isGlobal: true, // 글로벌로 설정되어 있기 때문에 아래 TypeOrmModule.forRootAsync에서 imports: [ConfigModule]를 넣지 않아도 동작됨
   				cache: true,
   				load: [configuration],
   			}),
   			TypeOrmModule.forRootAsync({
   				useFactory: async (configService: ConfigService) =>
   					configService.get('DB정보'),
   				inject: [ConfigService], // inject : useFactory 내에서 다른 의존성을 주입할 필요가 있을 때 사용
   			}),
   		]
   	    ~~~
        ~~~
   	    EX-2-2)
   		imports: [
   			ConfigModule.forRoot({
   				isGlobal: true,
   				cache: true,
   				load: [configuration],
   			}),
   			TypeOrmModule.forRootAsync({
   				useFactory: async (configService: ConfigService) => ({
   					type: 'mysql',
   					host: configService.get('DB_HOST')
   					// 기타 연결
   				}),
   				inject: [ConfigService] // inject : useFactory 내에서 다른 의존성을 주입할 필요가 있을 때 사용
   			})
   		]
        ~~~
