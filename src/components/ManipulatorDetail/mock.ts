import type { IManipulator } from 'models/manipulator/interface';

export const data: IManipulator = {
  name: 'Manipulator Sample 01',
  nameKana: 'Manipulator Sample 01 Kana',
  careerStart: '2015',
  pr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  profile:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  reviewRating: { total: 0, averageRating: 0 },
  nationalLicenses: ['柔道整復師', '作業療法士'],
  photos: [
    {
      type: 'default',
      objectKey: 'salon/public-read-XYK6dXYpzkbW_PuzM7ui_-salon-sample01.jpg',
      url: 'https://development-manipulator-api-data.s3.amazonaws.com/salon/public-read-XYK6dXYpzkbW_PuzM7ui_-salon-sample01.jpg',
    },
  ],
  menus: [
    {
      menuId: '63eb271f6c16aeae186fa23e',
      name: 'Menu Sample 01',
      estimatedTime: 60,
      order: 1,
      price: 100,
      currency: 'JPY',
    },
    {
      menuId: '63eb271f6c16aeae186fa23q',
      name: 'Menu Sample 02',
      estimatedTime: 60,
      order: 1,
      price: 100,
      currency: 'JPY',
    },
  ],
  salon: [
    {
      _id: '11',
      name: 'Salon Sample 01',
      nameKana: 'Salon Sample 01 (Kana)',
      addresses: [
        {
          provinceId: 1,
          province: '東京',
          stationIds: [1130101],
          areaId: 2,
          area: '原宿',
          address: '123 Nguyen Hue',
          stations: [{ id: 1130101, name: '東京' }],
        },
      ],
      access: ['東急東横線 渋谷駅 徒歩10分'],
      features: [
        { id: '1', name: '駅チカ' },
        { id: '2', name: '駐車場あり' },
        { id: '3', name: 'コロナ対策' },
        { id: '4', name: 'キッズスペースあり' },
        { id: '5', name: '子連れOK' },
        { id: '6', name: 'バリアフリー' },
        { id: '7', name: '女性専用' },
      ],
      photos: [
        {
          type: 'default',
          objectKey:
            'salon/public-read-XYK6dXYpzkbW_PuzM7ui_-salon-sample01.jpg',
          url: 'https://development-manipulator-api-data.s3.amazonaws.com/salon/public-read-XYK6dXYpzkbW_PuzM7ui_-salon-sample01.jpg',
        },
        {
          type: 'default',
          objectKey:
            'salon/public-read-XYK6dXYpzkbW_PuzM7ui_-salon-sample01.jpg',
          url: 'https://development-manipulator-api-data.s3.amazonaws.com/salon/public-read-XYK6dXYpzkbW_PuzM7ui_-salon-sample01.jpg',
        },
      ],
    },
  ],
  timeSlots: [],
};
