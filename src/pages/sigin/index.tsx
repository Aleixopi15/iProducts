import React, { useState } from 'react'
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Button,
  Link
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import auth from '@react-native-firebase/auth'

import { useNavigation } from '@react-navigation/native'

export default function Signin (): JSX.Element {
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const submitCredentials = (): void => {
    if (email === '' && password === '') {
      alert('Por favor informe suas credenciais!')
      return
    }
    setIsLoading(true)
    auth().signInWithEmailAndPassword(email, password)
      .then(() => { navigation.navigate('Home') })
      .catch((error) => { alert(error.message) })
      .finally(() => { setIsLoading(false) })
  }

  return (
    <Stack space={10} w="100%" p="100" alignItems="center">
      <Input
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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
              as={
                <MaterialIcons name={show ? 'visibility' : 'visibility-off'} />
              }
              size={5}
              mr="2"
              color="#4ECB19"
            />
          </Pressable>
        }
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
      />
      <Link onPress={() => { navigation.navigate('SignUp') }}>Não tenho conta</Link>
      <Button
        w={{ base: '100%' }}
        borderRadius={'15'}
        background={'#4ECB19'}
        isLoading={isLoading}
        onPress={submitCredentials}
      >
        Acessar
      </Button>
    </Stack>
  )
}
