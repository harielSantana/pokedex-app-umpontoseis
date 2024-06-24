// // RangeSlider.js
// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import Slider from '@react-native-community/slider';
// import styled from 'styled-components/native';

// const Container = styled.View`
//   width: 100%;
//   padding: 10px 0;
// `;

// const Label = styled.Text`
//   font-size: 16px;
//   margin-bottom: 5px;
// `;

// const ValueText = styled.Text`
//   font-size: 16px;
//   margin-top: 5px;
// `;

// const SliderWrapper = styled.View`
//   margin-top: 10px;
// `;

// const RangeSlider = ({ min, max, initialStartValue, initialEndValue }) => {
//   const [startValue, setStartValue] = useState(initialStartValue);
//   const [endValue, setEndValue] = useState(initialEndValue);

//   return (
//     <Container>
//       <Label>Number Range</Label>
//       <SliderWrapper>
//         <Slider
//           style={{ width: '100%', height: 40 }}
//           minimumValue={min}
//           maximumValue={max}
//           value={startValue}
//           onValueChange={value => setStartValue(value)}
//           minimumTrackTintColor="#1FB28A"
//           maximumTrackTintColor="#d3d3d3"
//           thumbTintColor="#1FB28A"
//         />
//         <ValueText>Start Value: {startValue}</ValueText>
//       </SliderWrapper>
//       <SliderWrapper>
//         <Slider
//           style={{ width: '100%', height: 40 }}
//           minimumValue={min}
//           maximumValue={max}
//           value={endValue}
//           onValueChange={value => setEndValue(value)}
//           minimumTrackTintColor="#1FB28A"
//           maximumTrackTintColor="#d3d3d3"
//           thumbTintColor="#1FB28A"
//         />
//         <ValueText>End Value: {endValue}</ValueText>
//       </SliderWrapper>
//     </Container>
//   );
// };

// export default RangeSlider;
