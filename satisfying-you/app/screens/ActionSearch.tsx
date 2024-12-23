import { StyleSheet, View } from 'react-native'
import { theme } from '@/constants/theme'
import { CardOp } from '@/components/CardOp';
import { useRouter } from 'expo-router';

export default function ActionSearch() {
  const router = useRouter();

  const handlePress = (path:string) => {
    router.push(path);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <CardOp onPress={() => handlePress('/screens/EditSearch')} icon="file-document-edit-outline" text="Modificar"></CardOp>
        <CardOp onPress={() => handlePress('/screens/Coleta')} icon="checkbox-multiple-marked-outline" text="Coletar dados"></CardOp>
        <CardOp onPress={() => handlePress('/screens/Report')} icon="chart-donut" text="Relatório"></CardOp>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingBottom: 10,
    width: '100%'
  },
  content:{
    width: '100%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})
