import { StatusBar } from 'expo-status-bar';
import {useTicTacToe} from "./useTicTacToe";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const game = useTicTacToe();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.title , game.activePlayer==="X"? styles.titleX: styles.titleO]}>
          {game.isFinished? game.winner + ' es el ganador': 'turno del jugador ' + game.activePlayer}

        </Text>
      </View>
      <View style={game.isFinished?styles.gridGameFinished: styles.grid}>
        <View style={styles.gridRow}>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,0)} style={styles.gridElement}>
            <Text style={ game.board[0]==="X"?styles.titleX:styles.titleO}>{game.board[0]==="_"?"":game.board[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,1)} style={styles.gridElement}>
            <Text style={game.board[1]==="X"?styles.titleX:styles.titleO}>{game.board[1]==="_"?"":game.board[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,2)} style={styles.gridElement}>
            <Text style={game.board[2]==="X"?styles.titleX:styles.titleO}>{game.board[2]==="_"?"":game.board[2]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,3)} style={styles.gridElement}>
            <Text style={game.board[3]==="X"?styles.titleX:styles.titleO}>{game.board[3]==="_"?"":game.board[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,4)} style={styles.gridElement}>
            <Text style={game.board[4]==="X"?styles.titleX:styles.titleO}>{game.board[4]==="_"?"":game.board[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,5)} style={styles.gridElement}>
            <Text style={game.board[5]==="X"?styles.titleX:styles.titleO}>{game.board[5]==="_"?"":game.board[5]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,6)} style={styles.gridElement}>
            <Text style={game.board[6]==="X"?styles.titleX:styles.titleO}>{game.board[6]==="_"?"":game.board[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,7)} style={styles.gridElement}>
            <Text style={game.board[7]==="X"?styles.titleX:styles.titleO}>{game.board[7]==="_"?"":game.board[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => game.move(game.activePlayer,8)} style={styles.gridElement}>
            <Text style={game.board[8]==="X"?styles.titleX:styles.titleO}>{game.board[8]==="_"?"":game.board[8]}</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{
    gap: 3
  },
  gridGameFinished:{
    pointerEvents: "none"
  },
  gridRow: {
    flexDirection: "row",
    gap: 3
  },
  gridElement: {
    borderStyle: "solid",
    borderColor: "#a4a4a4",
    borderWidth: 2,
    height: 100,
    width: 100,
    borderCurve: "circular",
    alignItems: "center"
  },
  titleX:{
    color: "#f00"
  },
  titleO:{
    color: "#00f"
  },
  title:{
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5
  },
  subtitle:{

  }
});
