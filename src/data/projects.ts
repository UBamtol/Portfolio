import type { Project } from '@/types/project';
export const projects: Project[] = [
  {
    title: 'MUSCLE.md',
    description: '운동 초보자 맞춤 운동 추천 및 기록 서비스',
    image: '/assets/Muscle_md_project.svg?height=600&width=800',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Next-Auth',
      'TailwindCSS',
      'Prisma',
      'Axios',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/UBamtol/2022_Daelim_Hackathon',
    challenge:
      '2박 3일 교내 해커톤의 짧은 시간 안에 Tailwind CSS, TypeScript, Prisma, Figma 등 처음 다루는 다양한 기술들을 빠르게 습득하고 통합하여 서비스를 완성해야 했습니다.',
    solution: `팀원들과의 적극적인 의사소통과 명확한 역할 분담을 통해 효율적인 개발 일정을 관리했습니다.
      집중적인 공식 문서 학습과 예제 코드를 통해 새로운 기술들을 단기간에 익혔습니다. 
      핵심 기능 구현에 집중하고 밤샘 코딩을 통해 시간 제약을 극복했습니다.`,
    result:
      '제한된 시간 안에 완성도 높은 서비스를 개발하며 새로운 기술 습득 및 적용 능력을 증명했습니다. 이를 인정받아 해커톤에서 장려상을 수상했습니다.',
  },
  {
    title: '무비어때(HowMovie)',
    description: '영화 정보 검색 및 리뷰 서비스',
    image: '/assets/HowMovie_project.svg?height=600&width=800',
    tags: ['React', 'Next.js', 'Next-Auth', 'TailwindCSS', 'Axios'],
    liveUrl: '#1',
    githubUrl: 'https://github.com/UBamtol/2022_Capstone-2_How_Movie',
    challenge:
      '이 프로젝트에서 처음으로 PL(프로젝트 리더)로서 기술적인 리더십을 발휘하고, 팀원들과의 효율적인 협업 프로세스를 구축해야 했습니다.',
    solution:
      '팀원들과의 주기적인 소통과 명확한 역할 분담을 통해 협업 효율을 높였습니다. 코드 리뷰를 통해 코드 품질을 관리하고, 함께 문제를 해결하며 프로젝트를 진행했습니다.',
    result:
      '프론트엔드 개발 역량과 더불어 팀을 이끌고 협업을 조율하는 경험을 통해 리더십과 소통 능력을 향상시켰습니다.',
  },
  {
    title: '다모임(Damoim)',
    description: '모임 매칭 서비스',
    image: '/assets/Damoim_project.svg?height=600&width=800',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Next-Auth',
      'TailwindCSS',
      'Prisma',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'Axios',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/UBamtol/Damoim',
    challenge:
      'Kakao Map API를 처음 활용하여 지도 기능을 구현함과 동시에 마감 3일 전 백엔드를 갑자기 맡게 되어, 짧은 시간 안에 기존 학습 경험을 바탕으로 백엔드를 구현해야했습니다.',
    solution:
      '공식 문서를 통해 지도 기능을 성공적으로 구현했으며, 기존 학습 경험(DTC 프로젝트)을 적극 활용하고 핵심 기능 구현에 집중하여 백엔드까지 빠르게 구현할 수 있었습니다.',
    result:
      '예상치 못한 상황 속에서도 프로젝트를 성공적으로 완수하며, 극한의 시간 압박 속 문제 해결 능력과 책임감, 그리고 기존 학습 경험을 위기 상황에 적용하는 실행력을 증명했습니다.',
  },
  {
    title: 'DTC(DUC_Tech_Community)',
    description: '대림대학교 컴퓨터 소프트웨어과 학생 커뮤니티 사이트',
    image: '/assets/DTC_project.svg?height=600&width=800',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Next-Auth',
      'TailwindCSS',
      'Prisma',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/UBamtol/DUC_Tech_Community',
    challenge:
      '프론트엔드부터 백엔드(PostgreSQL, GraphQL 등)까지 웹 서비스 전체를 혼자서 설계하고 구현하는 풀스택 개발 경험이 처음이었습니다.',
    solution:
      '프로젝트를 기능 단위로 세분화하고, 각 부분에 필요한 기술을 학습하며 개발을 진행했습니다. 지속적인 문제 해결을 위한 노력을 기울였습니다.',
    result:
      '풀스택 개발에 대한 실질적인 경험을 쌓았으며, 스스로 웹 서비스를 완성할 수 있다는 자신감을 확보했습니다.',
  },
];
