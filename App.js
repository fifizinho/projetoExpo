import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
      source={{uri:'https://tanojukeboxblog.files.wordpress.com/2021/05/4mitski-1-e1621316689780.jpg'}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
