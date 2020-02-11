import styled from 'styled-components/native';
import { colors, sizes } from '~/styles';

export const ListWeather = styled.View`
  flex: 10;
  margin-top: 0px;
  align-self: center;
  align-items: center;
  flex-direction: column;
  margin: ${sizes.margin_min}px;
  padding: ${sizes.padding_major}px;
  background-color: ${colors.white};
  border-radius: ${sizes.border_minor}px;
  box-shadow: 0px 2px 3.84px ${colors.black};
  shadow-opacity: 0.25;
  elevation: 5;
`;

export const DayWeek = styled.Text`
  font-size: ${sizes.font_med_1}px;
  font-weight: bold;
  color: ${colors.black};
  box-shadow: 2px 0px 1px ${colors.black};
  shadow-opacity: 0.25;
  elevation: 5;
`;

export const DateWeek = styled.Text`
  font-size: ${sizes.font_min}px;
  color: ${colors.black};
`;

export const DayMin = styled.Text`
  font-size: ${sizes.font_min}px;
  color: ${colors.primary};
`;

export const DayMax = styled.Text`
  font-size: ${sizes.font_min}px;
  color: ${colors.danger};
`;

export const TemperatureWeek = styled.View`
  margin-top: ${sizes.margin_med}px;
  flex-direction: row;
  justify-content: space-between;
  width: ${sizes.width_min}px;
`;
