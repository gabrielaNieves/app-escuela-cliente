import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Creando el estilo
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 12
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
    },
    footer: {
        margin: 12,
        fontSize: 14,
        textAlign: 'left',
    }
});



const Constancia = () => {
   
    const estudiante = {
        cedula: 29645732,
        nombre: "Maria Paez",
        grado: "1",
        seccion: "B"
    
    
    }
    const hoy = new Date();
    return (
        <Document>
            <Page size="LETTER" style={styles.body}>
                <Text style={styles.title}>
                    REPUBLICA BOLIVARIANA DE VENEZUELA
                    MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN
                    UNIDAD EDUCATIVA RAIMUNDO PERNALETE
                </Text>
                <Text style={styles.subtitle}>
                    CONSTANCIA DE ESTUDIOS
                </Text>
                <Text style={styles.text}>
                    Quien suscribe, Carmen Avila, titular de la Cédula de Identidad N° 9321456, en mi condición de Director/a de la Unidad Educativa RAIMUNDO PERNALETE, hago constar por medio de la presente que el/la estudiante {estudiante.nombre} , titular de la Cédula de Identidad N° {estudiante.cedula}, cursa estudios en esta institución en el {estudiante.grado + estudiante.seccion} de Educación Primaria, durante el Año Escolar 2025.
                </Text>
                <Text style={styles.text}>
                    Constancia que se expide a solicitud de la parte interesada en Carora, a los {hoy.getDay()} días del mes de {hoy.getMonth()} del año {hoy.getFullYear()}.
                </Text>
                <Text style={styles.footer}>
                Carmen Avila
                Director/a
                Unidad Educativa RAIMUNDO PERNALETE
                </Text>
            </Page>
        </Document>
    )
}

export default Constancia