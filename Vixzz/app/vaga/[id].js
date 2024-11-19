// app/cards/[id].js
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

// import styles from '../styles/templateStyles';
import JobCard from '../../assets/components/mainComponents/jobCard';

const DATA = [
  {
    id: '1',
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
    id: '2',
    vaga: 'Operador',
    empresa: 'Sicredi',
    local: 'Maceió, Alagoas (Presencial)',
    tempo: 'Há 2 semanas',
    img: require('../../assets/logo/empresa/sicredi.png'),
    tipo: "Pessoa Física",
    periodo: "Meio Período",
    area: "Varejo",
    situacao: "Aberta",
    descricao: "Operar as funções financeiras",
    requisitos: "Ter 16 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente.",
    beneficios: "Vale alimentação.",
    outrasInformacoes: "Local: Rua Fagundes Oliveira - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
  },
  {
    id: '3',
    vaga: 'Operador de Caixa',
    empresa: 'Sicredi',
    local: 'Maceió, Alagoas (Presencial)',
    tempo: 'Há 3 semanas',
    img: require('../../assets/logo/empresa/sicredi.png'),
    tipo: "Pessoa Física",
    periodo: "Integral",
    area: "Varejo",
    situacao: "Aberta",
    descricao: "Operar o caixa",
    requisitos: "Ter 18 anos ou mais;Saber mandarim fluente.",
    beneficios: "Vale-transporte.",
    outrasInformacoes: "Local: Rua Johanesburgo - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
  },
];

export default function CardDetails() {
  const { id } = useLocalSearchParams(); // Pega o id da URL
  const card = DATA.find((item) => item.id === id);
  const router = useRouter()

  if (!card) {
    return (
      <View>
        <Text>Card não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Image style={styles.img} source={card.img} />
          </View>
          <View style={styles.right}>
            <Text style={[styles.textVaga, styles.padrao]}>{card.vaga}</Text>
            <Text style={styles.textEmpresa}>{card.empresa}</Text>
            <Text style={styles.textLocal}>{card.local}</Text>
            <Text style={styles.textTempo}>{card.tempo}</Text>
          </View>
        </View>
        <View style={styles.pontualInfo}>
          <View style={styles.col}>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Tipo:</Text> {card.tipo}
            </Text>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Área:</Text> {card.area}
            </Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Período:</Text> {card.periodo}
            </Text>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Situação:</Text> {card.situacao}
            </Text>
          </View>
        </View>
        <View style={styles.largeText}>
          <Text>Descrição: {card.descricao}</Text>
        </View>
        <View style={styles.largeText}>
          <Text>Requisitos: {card.requisitos}</Text>
        </View>
        <View style={styles.largeText}>
          <Text>Benefícios: {card.beneficios}</Text>
        </View>
        <View style={styles.largeText}>
          <Text>Outras informações: {card.outrasInformacoes}</Text>
        </View>
        <Pressable onPress={() => router.back()} style={{ backgroundColor: '#14d16f' }}>
          <Text>Voltar</Text>
        </Pressable>
        {/* <JobCard vaga={card.vaga} resolver
          empresa={card.empresa}
          local={card.local}
          tempo={card.tempo}
          img={card.img}
        /> */}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
  },
  card: {
    flexDirection: 'row',
    gap: 10,
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
  pontualInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  col: {
  },
  textLabel: {
    color: '#633C8E',
    fontFamily: "Poppins_600SemiBold",
  }
})
