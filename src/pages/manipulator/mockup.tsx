import type { ManipulatorCardModel } from 'components/ManipulatorList/ManipulatorCard/model';

export const mockupList: ManipulatorCardModel[] = [
  {
    id: '1',
    avatar: 'images/default-avatar.png',
    name: '整体師太郎',
    nameKana: '整体師太郎',
    profile: '',
    careerStart: '',
    distance: '東急東横線 渋谷駅 徒歩10分',
    isFavorite: false,
    pr: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    photo: [
      { type: '', url: 'images/banner_mobile.webp' },
      { type: '', url: 'images/banner_mobile.webp' },
    ],
    fetures: [],
    yearsOfExperience: '5年',
    nationalLicenses: ['柔道整復師'],
    salons: [
      {
        _id: 'string',
        name: '快適整体院',
        nameKana: '快適整体院',
      },
    ],
    symptoms: [
      {
        id: 'string',
        name: 'string',
      },
    ],
    reviewRating: {
      total: 999,
      averageRating: 4.5,
    },
    treatmentMenu: {
      menu: [
        { title: '初診コース 60分', price: '6,000円～' },
        { title: '全身整体コース 120分', price: '15,000円' },
      ],
      reservableTime: [
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
      ],
    },
  },
  {
    id: '2',
    avatar: 'images/default-avatar.png',
    name: '整体師太郎',
    nameKana: '整体師太郎',
    profile: '',
    careerStart: '',
    distance: '東急東横線 渋谷駅 徒歩10分',
    isFavorite: true,
    pr: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    photo: [
      { type: '', url: 'images/banner_mobile.webp' },
      { type: '', url: 'images/banner_mobile.webp' },
    ],
    fetures: [
      { type: '', url: 'images/feature1.webp' },
      { type: '', url: 'images/feature2.webp' },
      { type: '', url: 'images/feature3.webp' },
      { type: '', url: 'images/feature4.webp' },
      { type: '', url: 'images/feature5.webp' },
      { type: '', url: 'images/feature6.webp' },
      { type: '', url: 'images/feature7.webp' },
      { type: '', url: 'images/feature8.webp' },
    ],
    yearsOfExperience: '5年',
    nationalLicenses: ['柔道整復師', '鍼灸師'],
    salons: [
      {
        _id: 'string',
        name: '快適整体院',
        nameKana: '快適整体院',
      },
    ],
    symptoms: [
      {
        id: 'string',
        name: 'string',
      },
    ],
    reviewRating: {
      total: 999,
      averageRating: 4.5,
    },
    treatmentMenu: {
      menu: [
        { title: '初診コース 60分', price: '6,000円～' },
        { title: '全身整体コース 120分', price: '15,000円' },
      ],
      reservableTime: [
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
      ],
    },
  },
  {
    id: '3',
    avatar: 'images/default-avatar.png',
    name: '整体師太郎',
    nameKana: '整体師太郎',
    profile: '',
    careerStart: '',
    distance: '東急東横線 渋谷駅 徒歩10分',
    isFavorite: true,
    pr: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    photo: [],
    fetures: [
      { type: '', url: 'images/feature1.webp' },
      { type: '', url: 'images/feature2.webp' },
      { type: '', url: 'images/feature3.webp' },
    ],
    yearsOfExperience: '',
    nationalLicenses: [],
    salons: [
      {
        _id: 'string',
        name: '快適整体院',
        nameKana: '快適整体院',
      },
    ],
    symptoms: [
      {
        id: 'string',
        name: 'string',
      },
    ],
    reviewRating: {
      total: 999,
      averageRating: 4.5,
    },
    treatmentMenu: {
      menu: [
        { title: '初診コース 60分', price: '6,000円～' },
        { title: '全身整体コース 120分', price: '15,000円' },
      ],
      reservableTime: ['10:00', '10:30'],
    },
  },
];
