import React from 'react';
import {
    Text,
    ImageBackground,
    Image
} from 'react-native';
import { FlatButton } from '@components';
import { styles } from './onboard.style';
import {
    BACKGROUND_ONBOARD,
    ICON_ONBOARD,
    LABEL_ONBOARD
}
    from '@assets';

function OnboardScreen() {
    return (
        <ImageBackground source={BACKGROUND_ONBOARD} style={styles.background} resizeMode="stretch">
            <Text style={styles.textheader}>HƯỚNG DẪN</Text>
            <Image source={ICON_ONBOARD} style={styles.icon} />
            <ImageBackground source={LABEL_ONBOARD} style={styles.label}>
                <Text style={styles.text}>
                    Lắc chắt chiu từng lượt{'\n'}
                    Nhận ngay 1 phần quà{'\n'}
                    Lắc tới bến chục lượt{'\n'}
                    Nhận một lúc 10 phần quà!
                </Text>
            </ImageBackground>
            <FlatButton
                title="Tham gia ngay"
                // onPress={handlePress}
                // containerStyle={{ backgroundColor: '#3498db', paddingHorizontal: 20 }}
                // titleStyle={{ color: 'white', fontSize: 16 }}
            />
        </ImageBackground>
    );
}

export default OnboardScreen;
