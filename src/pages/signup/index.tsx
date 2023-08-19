import React, { useState } from 'react'
import { Input, Icon, Stack, Pressable, Button } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

export default function Signin (): JSX.Element {
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleNewAccount = (): void => {
    setIsLoading(true)

    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => { navigation.navigate('SignIn') })
      .catch((error) => { console.log(error.message) })
      .finally(() => { setIsLoading(false) })
  }

  return (
    <Stack space={10} w="100%" p="100" alignItems="center">
  {/* <Input
    borderRadius={'15'}
    w={{
      base: '140%',
      md: '25%'
    }}
    InputLeftElement={
      <Icon
        as={<MaterialIcons name="person" />}
        size={5}
        ml="2"
        color="#4ECB19"
      />
    }
    placeholder="Nome"
    value={name}
    onChangeText={(text) => { setName(text) }}
  /> */}

  <Input
    borderRadius={'15'}
    w={{
      base: '140%',
      md: '25%'
    }}
    placeholder="Email"
    value={email}
    onChangeText={(text) => { setEmail(text) }}
  />

  <Input
    borderRadius={'15'}
    w={{
      base: '140%',
      md: '25%'
    }}
    type={show ? 'text' : 'password'}
    InputRightElement={
      <Pressable onPress={() => { setShow(!show) }}>
        <Icon
          as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
          size={5}
          mr="2"
          color="#4ECB19"
        />
      </Pressable>
    }
    placeholder="Senha"
    value={pass}
    onChangeText={(text) => { setPass(text) }}
  />

  {/* <Input
    borderRadius={'15'}
    w={{
      base: '140%',
      md: '25%'
    }}
    type={show ? 'text' : 'password'}
    InputRightElement={
      <Pressable onPress={() => { setShow(!show) }}>
        <Icon
          as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
          size={5}
          mr="2"
          color="#4ECB19"
        />
      </Pressable>
    }
    placeholder="Confirmar Senha"
  /> */}

  <Button
    w={{ base: '100%' }}
    borderRadius={'15'}
    background={'#4ECB19'}
    isLoading={isLoading}
    onPress={handleNewAccount}
  >
    Criar conta
  </Button>
</Stack>

  )
}
