import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import bgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor em nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
