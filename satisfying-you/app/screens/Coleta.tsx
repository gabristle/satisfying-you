import { StyleSheet, View, Text } from 'react-native';
import { theme } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons'

export default function Coleta () {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.icon}>
              <MaterialIcons name="sentiment-very-dissatisfied" size={75} color="red" />
              <Text style={styles.label}>Péssimo</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons name="sentiment-dissatisfied" size={75} color="tomato" />
              <Text style={styles.label}>Ruim</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons name="sentiment-neutral" size={75} color="yellow" />
              <Text style={styles.label}>Neutro</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons name="sentiment-satisfied" size={75} color="#2d9923" />
              <Text style={styles.label}>Bom</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons name="sentiment-very-satisfied" size={75} color="green" />
              <Text style={styles.label}>Excelente</Text>
            </View>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    width: '100%'
},
header: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
    gap: 48,
},
content:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    flexWrap: 'wrap', 
},
icon: {
  flexDirection: 'column',
  alignItems: 'center',
  marginHorizontal: 8,

},
title: {
    color: theme.colors.white,
    fontSize: 36,
    fontFamily: 'Averia'
},
label: {
  color: theme.colors.white,
  fontSize: 28,
  fontFamily: 'Averia'
},
registro: {
    backgroundColor: theme.colors.blue,
    height: 37,
    marginTop: 62,
    marginBottom: 14
},
redefinir: {
    backgroundColor: theme.colors.gray,
    height: 37
},
inputs: {
    gap: 20,
    marginTop: 35
}
});