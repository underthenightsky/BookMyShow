import { StyleSheet,Image,ScrollView ,Button, ImageBackground,
    SafeAreaView,SectionList,Pressable,
    FlatList,
    Alert} from 'react-native';
    import React,{useState} from 'react';
    import { StatusBar } from 'expo-status-bar';
    import { Text, View } from '@/components/Themed';
    export default function Login() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button title="Login" onPress={() => Alert.alert('Simple Button pressed')} />
            <StatusBar style="auto" />
          </View>
        );
      }
        const styles = StyleSheet.create({
            container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            },
            title: {
            fontSize: 20,
            fontWeight: 'bold',
            },
            separator: {
            marginVertical: 30,
            height: 1,
            width: '80%',
            },
        });   