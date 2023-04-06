// ** Icon imports
import Login from 'mdi-material-ui/Login'

import Cable from 'mdi-material-ui/CableData'

import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Overview',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Peril do usuário',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Dashboards'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login'
    },
    {
      sectionTitle: 'Painel de Controle'
    },
    {
      title: 'Conexões',
      icon: Cable,
      path: '/conexoes'
    },
    {
      title: 'Cadastro de usuário',
      icon: AccountPlusOutline,
      path: '/cadastro'
    }
  ]
}

export default navigation
