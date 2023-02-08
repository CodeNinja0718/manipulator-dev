import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import CheckboxList from 'components/CheckboxList';
import CheckboxBase from 'components/Form/CheckBox/CheckboxBase';

import styles from './styles';

const LOCATIONS = [
  {
    _id: 1,
    name: '渋谷',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 2,
    name: '原宿',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 3,
    name: '表参道・青山',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 4,
    name: '新宿',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 5,
    name: '池袋',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 6,
    name: '銀座・新橋・有楽町',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 7,
    name: '恵比寿・代官山・中目黒',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 8,
    name: '自由が丘・学芸大学',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 9,
    name: '六本木・麻布十番',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 10,
    name: '三軒茶屋・用賀・二子玉川',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 11,
    name: '下北沢・代々木上原',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 12,
    name: '目黒・戸越・武蔵小山',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 13,
    name: '北千住・町屋・亀有',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 14,
    name: '錦糸町・小岩・青砥',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 15,
    name: '吉祥寺・荻窪・三鷹',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 16,
    name: '立川・国立・国分寺',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 17,
    name: '八王子・日野・昭島',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 18,
    name: '中野・高円寺・阿佐ヶ谷',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 19,
    name: '品川・大森・蒲田',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 20,
    name: '上野・日本橋・浅草',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 21,
    name: '日暮里・駒込・千駄木',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 22,
    name: '赤羽・十条・王子',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 23,
    name: '葛西・西葛西・門前仲町',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 24,
    name: '経堂・成城学園・狛江',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 25,
    name: '飯田橋・四谷・御茶ノ水',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 26,
    name: '笹塚・下高井戸・千歳烏山',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 27,
    name: '町田',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 28,
    name: '板橋・成増・巣鴨',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 29,
    name: '田無・小平・久米川',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 30,
    name: '大泉学園・江古田・練馬',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 31,
    name: '東久留米・ひばりヶ丘',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 32,
    name: '調布・府中',
    provinceId: 1,
    provinceName: '東京',
  },
  {
    _id: 33,
    name: '多摩・聖蹟桜ヶ丘・稲城',
    provinceId: 1,
    provinceName: '東京',
  },
];

const LocationList = () => {
  return (
    <Box>
      <Typography color="grownText" sx={{ fontSize: '1.13rem', mb: 17 }}>
        東京
      </Typography>
      <CheckboxList
        leftComponent={<></>}
        rightComponent={
          <>
            {LOCATIONS.map((item) => (
              <FormControlLabel
                key={item._id}
                control={<CheckboxBase iconClassName="customCheckbox" />}
                label={item.name}
                sx={styles.checkboxItem}
                labelPlacement="start"
              />
            ))}
          </>
        }
      />
    </Box>
  );
};

export default LocationList;
