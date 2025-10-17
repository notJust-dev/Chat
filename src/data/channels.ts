import { Channel } from '@/types';

const channels: Channel[] = [
  {
    id: '1',
    name: 'Tech Daily',
    lastMessage: {
      id: 'm-1',
      content: 'Shipping the new feature flag rollout this afternoon.',
      createdAt: '2025-08-18T10:24:00Z',
    },
    avatar: 'https://picsum.photos/id/11/200/200',
  },
  {
    id: '2',
    name: 'Coffee Chat',
    lastMessage: {
      id: 'm-2',
      content: 'Who is up for a virtual coffee at 3 pm?',
      createdAt: '2025-08-18T09:55:12Z',
    },
    avatar: 'https://picsum.photos/id/1027/200/200',
  },
  {
    id: '3',
    name: 'Design Hub',
    avatar: 'https://picsum.photos/id/1005/200/200',
  },
  {
    id: '4',
    name: 'Product Standup',
    lastMessage: {
      id: 'm-4',
      content: 'Sprint review pushed to tomorrow due to deploy window.',
      createdAt: '2025-08-18T07:10:44Z',
    },
    avatar: 'https://picsum.photos/id/1012/200/200',
  },
  {
    id: '5',
    name: 'DevOps Corner',
    lastMessage: {
      id: 'm-5',
      content:
        'Cluster autoscaler bumped to v1.29. Monitoring for regressions.',
      createdAt: '2025-08-16T22:18:31Z',
    },
    avatar: 'https://picsum.photos/id/1016/200/200',
  },
  {
    id: '6',
    name: 'Marketing Team',
    lastMessage: {
      id: 'm-6',
      content: 'Campaign CTR is up 12% week over week. Nice work!',
      createdAt: '2025-08-18T11:20:00Z',
    },
    avatar: 'https://picsum.photos/id/1035/200/200',
  },
  {
    id: '7',
    name: 'Sales Updates',
    lastMessage: {
      id: 'm-7',
      content: 'Closed the ACME renewal. Expansion to 150 seats.',
      createdAt: '2025-08-15T15:02:19Z',
    },
    avatar: 'https://picsum.photos/id/1050/200/200',
  },
  {
    id: '8',
    name: 'Support Desk',
    lastMessage: {
      id: 'm-8',
      content: 'Incident #432 mitigated. Root cause doc incoming.',
      createdAt: '2025-08-18T08:05:47Z',
    },
    avatar: 'https://picsum.photos/id/1062/200/200',
  },
  {
    id: '9',
    name: 'Random',
    lastMessage: {
      id: 'm-9',
      content: 'Friday meme drop incoming. Brace yourselves.',
      createdAt: '2025-08-14T19:12:03Z',
    },
    avatar: 'https://picsum.photos/id/1074/200/200',
  },
  {
    id: '10',
    name: 'AI Research',
    lastMessage: {
      id: 'm-10',
      content: 'Uploaded the latest benchmark results to the shared drive.',
      createdAt: '2025-08-17T13:33:59Z',
    },
    avatar: 'https://picsum.photos/id/1084/200/200',
  },
  {
    id: '11',
    name: 'Mobile Squad',
    lastMessage: {
      id: 'm-11',
      content: 'Android crash fixed in 2.4.1. Rolling out staged to 10%.',
      createdAt: '2025-08-18T06:48:21Z',
    },
    avatar: 'https://picsum.photos/id/1080/200/200',
  },
  {
    id: '12',
    name: 'Frontend Guild',
    lastMessage: {
      id: 'm-12',
      content: 'Migrated to the new ESLint config; please re-run yarn lint.',
      createdAt: '2025-08-16T09:22:10Z',
    },
    avatar: 'https://picsum.photos/id/1025/200/200',
  },
];

export default channels;
