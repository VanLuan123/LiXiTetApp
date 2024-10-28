import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { BACKGROUND_ONBOARD, ICON_ONBOARD, LABEL_ONBOARD } from './assets';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  return (
    <ImageBackground
      source={BACKGROUND_ONBOARD}
      style={[styles.background]}
      resizeMode='stretch'
    >
      <Text style={styles.textheader}>HƯỚNG DẪN</Text>
      <Image
        source={ICON_ONBOARD}
        style={styles.icon}
      />
      <ImageBackground
        source={LABEL_ONBOARD}
        style={styles.label}
      >
        <Text style={styles.text}>
          Lắc chắt chiu từng lượt{'\n'}
          Nhận ngay 1 phần quà{'\n'}
          Lắc tới bến chục lượt{'\n'}
          Nhận một lúc 10 phần quà!
        </Text>
      </ImageBackground>
      <TouchableOpacity style={styles.button}>
        <LinearGradient colors={['#FFF613','#F37500']} style={styles.linearGradient}>
          <Text >
            Tham gia ngay
          </Text>
        </LinearGradient>

      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1
  },
  icon: {
    width: 414,
    height: 401,
    top: 70,
  },
  label: {
    width: 335,
    height: 151,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    height: "50%",
    width: "70%",
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'SVN-Gotham Bold',
  },
  textheader: {
    top: 60,
    fontSize: 24,
    fontFamily: 'SVN-Cookies',
  },
  button: {
    width: 179,
    height: 44,
    borderRadius: 18,
    backgroundColor: '#FFF613',
    borderWidth: 2,
    borderColor: '#FFF613',
    top: 80,
    overflow: 'hidden', // Để bo góc cho LinearGradient
    elevation: 3, // Chỉ dành cho Android
    shadowColor: '#000', // Màu bóng
    shadowOffset: {
      width: 0, // Độ dời theo chiều ngang
      height: 1, // Độ dời theo chiều dọc
    },
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 1,
  },
  linearGradient: {
    height:'100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
