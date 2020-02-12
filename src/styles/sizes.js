import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';

const sizes = {
  padding_minor: heightPercentageToDP('2.1%'),
  padding: heightPercentageToDP('2.40%'),
  padding_major: heightPercentageToDP('3.1%'),
  border_minor: heightPercentageToDP('2.40%'),
  border_major: heightPercentageToDP('3.1%'),
  font_min: heightPercentageToDP('2.7%'),
  font_med: heightPercentageToDP('3.1%'),
  font_med_1: heightPercentageToDP('3.5%'),
  font_max: heightPercentageToDP('5.1%'),
  font_max_1: heightPercentageToDP('15.8%'),
  margin_min: widthPercentageToDP('1.7%'),
  margin_min_1: widthPercentageToDP('3%'),
  margin_med: widthPercentageToDP('5.5%'),
  margin_max: widthPercentageToDP('11%'),
  width_min: widthPercentageToDP('21%'),
};

export default sizes;
