// app/cards/[id].js
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    vaga: 'Vendedor',
    empresa: 'Magalu',
    local: 'Maceió, Alagoas (Presencial)',
    tempo: 'Há 69 semanas',
    img: require('../../assets/logo/empresa/magalu.png'),
    tipo: "Pessoa Física",
    periodo: "Integral",
    area: "Varejo",
    situacao: "Aberta",
    descricao: "Realizar vendas, atender clientes e auxiliar no controle de estoque.",
    requisitos: "Ter 18 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente;Saber mandarim fluente.",
    beneficios: "Vale alimentação; Vale-transporte; Plano de saúde; Plano odontológico; PLE; Descontos em produtos.",
    outrasInformacoes: "Local: Rua Oldemburgo da Silva Paranhos - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    vaga: 'Operador',
    empresa: 'Sicredi',
    local: 'Maceió, Alagoas (Presencial)',
    tempo: 'Há 2 semanas',
    img: require('../../assets/logo/empresa/sicredi.png'),
    tipo: "Pessoa Física",
    periodo: "Integral",
    area: "Varejo",
    situacao: "Aberta",
    descricao: "Realizar vendas, atender clientes e auxiliar no controle de estoque.",
    requisitos: "Ter 18 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente;Saber mandarim fluente.",
    beneficios: "Vale alimentação; Vale-transporte; Plano de saúde; Plano odontológico; PLE; Descontos em produtos.",
    outrasInformacoes: "Local: Rua Oldemburgo da Silva Paranhos - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
    vaga: 'Varejo',
    empresa: 'Sicredi',
    local: 'Maceió, Alagoas (Presencial)',
    tempo: 'Há 3 semanas',
    img: require('../../assets/logo/empresa/sicredi.png'),
    tipo: "Pessoa Física",
    periodo: "Integral",
    area: "Varejo",
    situacao: "Aberta",
    descricao: "Realizar vendas, atender clientes e auxiliar no controle de estoque.",
    requisitos: "Ter 18 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente;Saber mandarim fluente.",
    beneficios: "Vale alimentação; Vale-transporte; Plano de saúde; Plano odontológico; PLE; Descontos em produtos.",
    outrasInformacoes: "Local: Rua Oldemburgo da Silva Paranhos - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
  },
];

export default function CardDetails() {
  const { id } = useLocalSearchParams(); // Pega o id da URL
  const card = DATA.find((item) => item.id === id);

  if (!card) {
    return (
      <View>
        <Text>Card não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
       <View style={styles.container}>
        <Image style={styles.img} source={card.img} />
        <View style={styles.content}>
          <Text style={styles.textVaga}>{card.vaga}</Text>
          <Text style={[styles.textEmpresa, styles.padrao]}>{card.empresa}</Text>
          <Text style={[styles.textLocal, styles.padrao]}>{card.local}</Text>
          <Text style={[styles.textTempo, styles.padrao]}>{card.tempo}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  content: {
    flex: 1,
  },
  img: {
    width: 74,
    height: 74,
    borderRadius: 10,
  },
  textVaga: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#2C2C2C'
  },
  textEmpresa: {
    color: '#444444'
  },
  textLocal: {
    color: '#9C9C9C'
  },
  textTempo: {
    color: '#555555'
  },
  padrao: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
})
