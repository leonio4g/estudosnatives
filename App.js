import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, TextInput, Switch, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';
import Botao from './src/Components/Botão'

const App = () => {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [select, setSelect] = useState('')
  const [limite, setLimite] = useState(0)
  const [student, setStudent] = useState(false)
  const [active, setActive] = useState(false)


  const onChangeNome = (value) => {
    setNome(value)
  }
  const onChangeIdade = (value) => {
    setIdade(value)
  }

  const handleState = () => {
    //setEstado2([...estado2, estado])
    setActive(!active)
    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+nome + '\n' + 
      'Idade: ' + idade + '\n' +
      'Sexo: '+ select + ' \n' +
      'Limite Conta: ' + limite.toFixed(0) + '\n' +
      'Conta Estudante: ' + ((student)? 'Ativo' : 'Inativo')
      );
  }

  return (
    <View style={{ backgroundColor: '#c2c2c2', flex: 1, padding: 10, paddingHorizontal: 15 }} >
      <StatusBar backgroundColor="#67159C" />
      <View style={{ alignItems: "center" }} >
        <Text style={{ fontWeight: 'bold', color: "#67159C" }} >Banco React</Text>
      </View>

      <View
        style={{
          marginTop: 15,
        }} >
        <Text style={{ color: '#000', fontWeight: 'bold' }} >Nome</Text>
        <TextInput
          style={{
            width: 350,
            height: 48,
            backgroundColor: "#fff",
            marginBottom: 10,
            borderRadius: 8,
            color: "#67159c",
            fontWeight: 'bold'
          }}
          autoCapitalize='none'
          secureTextEntry={active}
          placeholder='Nome'
          value={nome}
          onChangeText={onChangeNome}
        />

        <Text style={{ color: '#000', fontWeight: 'bold' }} >Idade</Text>
        <TextInput
          style={{
            width: 350,
            height: 48,
            backgroundColor: "#fff",
            borderRadius: 8,
            color: "#67159c",
            fontWeight: 'bold'
          }}
          placeholder='Idade'
          value={idade}
          onChangeText={onChangeIdade}
        />
      </View>

      <Picker
        selectedValue={select}
        style={{ height: 48, width: 350, color: '#000' }}
        onValueChange={(item, index) => setSelect(item)}
      >
        <Picker.Item label="Sexo" value="0" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      <Text style={{ color: '#000' }} >Seu Limite : {limite.toFixed(0)}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={5000}
        onValueChange={(item) => setLimite(item)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      <View style={{ flexDirection: 'row' }} >
        <Text style={{ color: '#000' }} >Estudante ?</Text>
        <Switch value={student} onValueChange={(item) => setStudent(item)} />
      </View>

      {active ?
        <View>
          <Text style={{ color: '#000' }} >Nome: {nome}</Text>
          <Text style={{ color: '#000' }} >Idade: {idade}</Text>
          <Text style={{ color: '#000' }} >Sexo: {select}</Text>
          <Text style={{ color: '#000' }} >Limite: {limite.toFixed(0)}</Text>
          <Text style={{ color: '#000' }} >Estudante: {student ? 'Ativo' : 'inativo'}</Text>
        </View>
        : null
      }


      <View
        style={{
          alignItems: 'center',
          marginTop: 15,
          justifyContent: 'flex-end',
          flex: 1
        }} >
        <Botao title="Adicionar" onPress={handleState} />

      </View>
    </View>
  )
}



export default App
