
//import { styles } from './styles'

import { Text, TouchableOpacity, View } from "react-native";

type TaskProps = {
    task: string;

}

export function Task({task}: TaskProps) { //(props: TaskProps) ou a forma desestruturada que preferi usar
    return (
        <View>
            <TouchableOpacity>

            </TouchableOpacity>
            <Text>
                {task}
            </Text>
            
        </View>
    )
}


/**
 * 
 * O TouchableOpacity é um componente em React Native que encapsula um ou mais componentes e lida com os eventos de toque (ou clique) dos usuários. Ele é comumente usado para tornar qualquer coisa clicável, fornecendo um feedback visual de toque (como uma leve mudança de opacidade) quando o usuário pressiona o componente.

    O motivo pelo qual usamos TouchableOpacity ao redor de um item em uma lista é para fornecer uma sensação de feedback tátil aos usuários quando eles tocam em um item da lista. Sem o TouchableOpacity, o item da lista não teria esse feedback visual, o que poderia fazer com que os usuários se sentissem confusos ou incertos sobre se o item foi clicado com sucesso.

    Além disso, o TouchableOpacity é uma maneira de garantir que o evento de toque seja capturado de forma eficaz, mesmo que o item da lista seja composto por outros componentes. Isso garante uma experiência consistente para os usuários, independentemente de onde na área do item eles toquem.
 */