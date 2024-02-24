import { StyleSheet,Image,ScrollView ,Button, ImageBackground,
SafeAreaView,SectionList,Pressable,
FlatList,
Alert} from 'react-native';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '@/components/Themed';
const ListItem = ({item}:{item:any}) => {
  const[timesPressed,setTimesPressed]=useState(0);
  const onPressFunction=()=>{
    setTimesPressed(timesPressed+1)
  // if(timesPressed>1 && timesPressed%2==0){
  //   return
  // }
  // else{
    Alert.alert('Please Login before choosing seats!')
  // }
}
  return (
    <View style={styles.item}>
      <Pressable onLongPress={onPressFunction}>
      <Image
        source={{
          uri: item.pics,
        }}
        // source ={require({item.pics})}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};
export default function TabOneScreen() {
  return (
       <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={true}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={true}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
  
    
  
}
const SECTIONS=[
  {
    title: "Our Recommendations",
    horizontal :true,
    data:[
      {
        key:1,
        text:"Fighter",
        pics:"data:image/jpeg;base64,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"
         // pics:"C:/Users/1/wedontgiveup/BookmyShow/assets/images/MovieIcons/FighterImageNew.jpg"
      },
        {key:2,
          text:"Iron Man 2",
          pics:"data:image/jpeg;base64,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"
        },
      {key:3,
        text:"Avatar",
        pics:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EADsQAAIBAwMCBAMGBAYCAwEAAAECAwAEEQUSIRMxBiJBUWFxgRQyQpGhsRUjUsEHM3LR4fEk8ENTghb/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAJhEAAgIBBAICAQUAAAAAAAAAAAECEQMEEiExE0EiUTIFFDNCYf/aAAwDAQACEQMRAD8A9eMvxphkNBIdUeKTpzgMP6hV2O7jk7HP1oFUH4LjA+hqBmmV8jJFO3p/VTTKg/FVKRNp03TgDg5FMTUSXIxzTtoflSM1WmiUN5gVPvW1KLKcWWGu2bIFOtr0q+x6HxYjc5JOafKhMgZGrakroxtYaEyuPTJ7U25JaPar7DkZOewoSk7Jwx+tWVcM3LHkVW6jW0mEc7OGF2WAPIHFOMUhjCmdhlNuecr3yfjwcfSqoyGODTd8gcY7fOr8hjxItdKcsC1yfvZKj05B/wB6atvMFVWvH3ZGXBP5d6aLkqp9TXRdJgbiBn41ryWV4izbq8YO6Uv27k+3JqXfVIXUX9Q/Ourcxtjae9Tgva0W91LfVfqfrXDJVpGWyzvpb6rb6XUqUVZZ30t9U0uFkXdGwZfcGndSrS4sllrfS31V6ldD1dEss76VV+pSqbSWZme0QNvLHP6V0XVvCuN6iuNPFP8A5oIFQyWtrLnL4x8KQ3fY3wWTrVtGPvZ+lNbX7Agb25+VB7+wiwFimVi3bBql/ALlvR6NBQa5YOTaZon8RQD/ACe3zqS316KcHcVOPc1m10C5H4ZMisR4k1Nre6ubOFnUwuEYg483qPz/AGrThCuGXCbbqj0W/wDGGnwkrFiSQ5C4PGaC/wD9leyyERyjA7CNc4rzl7g7mEjbj2LDvke1TJJJFCXjVoVJ+82axXAW0ep2/jERkLqELlSP8wL2rQ2V5DdQrNayBlPYg5zXhEeqXMLq6XCHnjk8/Str4M8SqzSxsI43PJVTwx9+e1VVolWenJO3Y/nUockcVmYtQnuV6kCb05GUOax+oeL9X0jWbxHIeIZAik/D7EfnUeOSMLIm6N1rmtrp8LKhUSMNqs7Y5z3H681h5PEUzdSIPtG45PU3ZPuDWK1O/u5bnr3Uxl6hLK4PHyx6fKoYLmSaQhGOfQVvaUpJqzbNrcoQDrnePxE85+dF9K8UypNG1xPuiLBWU9x8azcOi9WGLfMFc8kE+tDb/Sr+2kPRBljJxvXn6Vt45JWBjqcUpbUz22HUQybsEqfuketWo7gSDKmsL4OvdZi053vIRLACFAYeZT7/AF/tR5NalXj7NgVI7/ovI8a7ZoBIap6vqK6fp0105HkXj4k8AUO/jjjvb5+tZ/xnrkc+nQ2U8fTFxOo3Z7bfN/YfnWpOSjdAlKLdJmh8JXn2jSuTyshH0PNGjJivNvA2uPbi7iEXUUhW59K1g1pSvnhZW9qmFylC6MzlCLpsO9WuiX40A/jI/wDqaufxr2iNHUX9GHlh9mh6lKs//G8f/Ga5V7SvND7Bf2h1KF3DFu4HpVmO6QEcZDd6ghsZJCXJCKOxI5q0lsqIrMFB9q5lHQTKv8NsGZZoJpUlQ7sZ4rQWV/KkS9TBXHtQ5I4UGRnPeuEpngvj2qqLDVzqEptJTa7RLtymR6jtWD1Ww0yz8M9SaNGv7zE87bckOx3H8jwPgK0pbanlODWQ8Y6hpl504tPukdUh2sy5+8PQ/kab0uNSlyJ6zLLHDgB2tvZ28w2oHZiFUY/M1evrGG+iwEHSUfy19zQ2PUbGziU3BZyo4Cj73uKN23ibT57dEksXtlYYDb8/p7V0ZKC4ORGeXmVswN9plx/E1tUdQHbyvjygfGrVnbCK4CQuXVTh5c8uf7Ci+vRSQAyIV6b/AIm4zQK81ZbbSEt4LUxXLkhwW3bB7j2JpLNiUXwdbS6qWSnL0eteHbuJdHikhXKv5uKw3j29gm8VtbIR1TAm5u+Wxz+mPyo7/hvc/afDUUbAZgBGPYZIH7V5n4ndn1Z7vL7pMkMRjsSAR+X70KlVDFve5ElyXj+0QkEjbuHwpaCH6yzHvuwB71El5LcafIHKlgCGfHJwKM6PaEQbYpUDqPLk9jTOHHb5OfqszUGaeMNHNC7qC7qWMYPKitPoM1jeQfZnXZMpOCTjtXmZ0+WRpDdXEMUq92lkZT8wR3+Vd0OW86wX7YwC/wBXt8DR5ZN/xRz4YfGvJdnt9kkUUUtu7qGlTaMngn8J/OgZvvMVIXj0rMao/iO1lsbrTpFnEy7Q+Mhcc80RbrNIXuXLynzOduMn3xQo403yO+SW1NIJyXu1SdorAf4g30l3qlpbpwsMTOce7H+239a1cuHyQStYnXkiOr38rTFZFjj6aepyBk0HUJRx2E08m5BnwRc9K7lDDh4QT7DmtZJqSLwVB+OKxPhyTpyMuNoEedx9eaPCUoNzsDmpoYJ4rM6qUo5KCq3yt2Uc05rv4Chw6u0uq5JHAxXXkkEIZl83sBTvjiLbmXTct3wKVDt7OAZCUPtSq9iJuZrH6gXHAFVyhadZWbCj0qWZz081D5imPWuCmz0VInEqZAyM04sn9QoeLeUup4Iq9HbA9wa2kYbQ91R48bsA8ZFYm20I2vie6MsV3JZJZtueYbkDhfKQ2eM4PA/63iwoAPehOq284dlg5t5kcyxk4ywQ7efmRTGD8uRXVcwo8/1jR0vnEdmiBmIOCOCKlsNJgjYPeWMFpGhLlRJ1GY+ykjgfCoIHuLyUPFutemMeY8t86r3t3cmQiRtzj8XoKecYye45SnLHHYx/iq8W6tijYjjUeSOsk1qGt4Y0xufnNXtWm3R9INukb7zGpr+RYNK03pwqJF8xPqePWlNXP5RSOn+nRqEmzV/4VS40/UInyBGGBx7dz+9ZHxGC+kaXLGSYSHAB7ghj6+1O0DWJNL0/VZVba9xFsRR2LMSP2rsm668K2dtGu6czgIB3I7Y/OhOxuVcgrS0zDKwI7NwfbH/NFYiVCSwkK5AP1xUcOn9CzULnqsG6o/pz2ptvIjworArIFH7U9jVUcfM97sM29zLcRGN+fbdj9DSIjtriNhhXYc8+lVrclNrcZzVm6kgueJoZGHqVFGuuRJpN0eg+HY4NSsIjcqjiykLoGbJ5Uj9O/wBKiEhAYhhuH60F8FxWNnbzhUmjun8yySHhkxjb3xxz+dGNqxsdh4PrQovlsakkopIrtexrHg5EmfRTWI1GeJrhpkLyBncvlNuBnAxzzwK29y/RDSOmY0G5jjsBXnEk1sksbWryAurM/UHyx/elNbykhnSrtmm8Pb2uwOAojJwR3zR0B+oRJGvegHhiQNeysxyoiGD9a0RJkuA2/I9gKL+n8YUD1bvIQ3fXRsiVkz2A9KmjQvbZe4JaldTzBSNgNUs3TJ6L9KeFbLZt3fBExx8qVdTrIirJjNKoSzTMnUiwTTFtl/qb86tqoC4pyKDXDUT0LlZyKDb8akZwr7QOa6DilnHOOa2gdjs+1U9YbbpN7IF3NFbu4UHG4qpP9qsbqjuhvtLhDzuiYfmDWlwZ77PJJYw1ybi3jthBdKZol6rHCZIHHoeO1DryfHljwxI9OwoSHkltocz7I42SINnO0NliR78k0cuQqzQxTqqOqAHaMjFNY8iqhHU4mpX6KDWRW1kmmfLEH0p2qPi1t1PpAo+poqyMbRgka4PYn1+lArySWQCBgOAP04rOox24s3o8tbkyiw/8WJP6mZm/atd4Ke3tSL68UMtsAsKH1JyCfiQM/nWb6a9BYycFe5+NayTRbiys7QJcDqNFudDyFbHbH1FVjxtsLnyqEOWDrhdz+UlW7sPShDRlNmfUd/rj+1Gb8ztKZLtQrN+JexqlNFG0PlB3Bj+WaZm0/wDBCCrnshhumiO1+1FIrm0eLbM7YHoOKg0qyN7qFrbhCS8gzx6CvTjplpuBMKZHbKCsqVcFPEpcmU06GGC1CQCR4nO/njBxg/tRWB1K7FQ49yaJy6exY9MeX4VF/D5Q2MHHxraaLcWkBteuJ7fSbuIRlkeFgSfTIrALDIs+1QG5G5wOB7D8zXpWt6bJJpdwkTgMV3HqHjAIJFYSOFhazooIdynYjjDZP7Uhqm91DmnXxCvgyQm5ljuFB8mcD51sJNpA6KdM+9ZXwohi1CaSaJ0JQqHYY3c1qGugPN0Sy+9MaO1iF9V/INkBfKqcHHNM2CJRvbcc8AVLueZSdoVffFV+iyMG6zMue2KbsXosdVTywO6lUHUDZJZlOfbvSqyGwqaIA1VDVJ1QO1cdnbsslRTStQCU+9d6mazTKOmugbvLxzxzUZauoTu4raIeCapp13ZxQPdQCNJstFyuWAyDwDlcHA5x61ptYtE+1faIclSFDc9iVB/Xmq3jFXFnZo8cnThu7yNXKsFJ6zfdzx+VGre3MuhwTOVBuBGFBPfYuGP54/OmNN8lyLa1beijCpePGNq9uaEakscc3TRCzgeYe1am5tXsNPmnKMSBuUsKzMEUs8wXJ3yHk49femMrv4oV00dqc36JtE0zqy/aJVxFGcgf1GtC7NK24xZ+dRpHsRYYyVVOOPWnfy4fv7nf+kGiQlHGqXLAZYSzy3N0jlzYCWMsIjtI8wHIFZqaCS2uGjA3RjkD2rXQfapvLGscWewcE1LfaNdTQ5lgjlGCd8Aww/8Az61jJJy7iawxUOIysr+BRaSXrSYKXQQqA/Y+5HxrZNES53HvWR8LabGL1jOP5kTBoiDxxWx2g4JoSQ0uiFwtuu9Qzn51TkE1y25GZKI7RTemoP3sCtFNGH8d3F3YWEawzYW4ZkfnnGPSsrZ9aWIukzpIpCnDcfP5Vs/8QrC4udOt2t7dpBDKS5XuoIxmsdGOlCwcKE3BZOME5H6AUnnvcM4aSNN4bvVvla0YPIYhuWVjkkHvmtBJYyzRrGG2KBWe8Iwrai7luFZC5CoSMAj1x781pVmDgfzNueBz3pnA5eNIVzKLnZXjtvsgIaZmHtUVw0Tp5nZF9KV3EOp5ndvYA4qF1kaPBQKo9+SaYQuyNLi1gyrTH60qY7Wz4MvB7Y21yrKNcsma4ZDUCyKvc0usj/dOa5Z2Sx1CAT6D1p4k4zQy9SWZFSJ9oHepoj0oguST7mpZRcMma4p2gszYAGTuNVxIKHavflInVF34Xzg/d+RrUUypySRjNQs11XX2trV5ZftN2zo4yFQOxycdv29K21rZuircokaWlqvStHkHCqPxD398nuflQTwslsNl7c8xv5sDgyMfwj6Hb+Z9RWiuL24knH8TgQICAkIPkjB9fiTTUKx9CU28vZkfE90LmRIlkaQjzsxOM57cfrTdGtNqG4kODjCGqOsSRz6tdMqCNVkKqo9MUbXMdnEpHlRcnHoapPncacKSh6GSyFWEaZXPdvWpYFjhwVdgT3x3P1qtb7XyznBY81OzgYCAGmsSS59ieZ38V0EIZe2Nqr7tk0fs5klVVIB/0nisxBI3GFFF9OmSOVCwx7miTVoWxvZKixqdt9lZ76zOyZRlxjIcfGlp2rRX0eUAWQd0Jzx7ip7udZWbpkHA7N2rPNbPaXH2qLckLEB1X0/4pWUWlaH4ZU5bWFrzVmXIhK5qkt9cyKcy4I5xig17PJb+IShf/wAeZlIBGRg/tR9o1Rv5cRKg9qkZWammgP4k1loNPFqeZbjjdjICgjOazUK3EgRHWAq77SOnkHj49uB60V8WBmvrVdi5WE559yf9qGCR1iKgjdzkkemf/fpSef8AJjWLo0c1o5to2S76kZQbCh4xiq8JSEeeZt47ZOadocRbT93kB3ny5qWSGNm88KZ9xTmF3BMSyfkys9xdXMm3qqVHtTmNyw/lTnI7g9qkYRRYKwqcd8GuoUkHoM+maKCHxQOVy7Jk+9cqCXTWc5WQgf6qVQlGgLh+9VY0l+0EtIQtRrOPepBNnv2rn0day6JNsXc5qFZJDMB+E+vtUJmGMUllVjySF9hUUfsjkEAEWNneRVAGeayNzdHVb6C1hdWDFvL1MBsDOP8AeiOpXrNIkAYLAeZiBnI9qAXMDRahDe2piRbZQWXOAcf9miUkuADe6XyZqFQ6eRbxESSFQsj9MAAkYK/L4fE0zVbhpkSRJN2fKG/0/wDpqvNqkE8QS0ZxvcbnKnsOT/tVVZFCsu7yqSR8BzUwqbW6XALLOO7ZEz++SW4dpD/MaQ7vnnmjsznAiDHkDI96z9oQ16u0krvJyfaikZMkzMWyxJ4rUOZhMrqFhOGAMzBCCqjJNMkbaOBzVjRYo36/WlVFVchz6V2Ownmm4mUhuxUcbfjTliG23ZCHcJyDirdrO45QkkDOKivdHu1jDxTq4JGUTgdqFjfAzMyzKoxhk7D3zmqeVr0X+3Uumaq0kWYyLyG2kkH1qzagXdmesSI/ujHqazdtqkiK79Pcsn8tZAeVPxFFbXU9gSJWBXuc1SkpqjMsbxO2CPEVt0LiM7mIC7QT+hrQaTN17KGUnLlcN8x3/amatELzThIFBxxn4f8AdUvDkvTsGTuVlOfrQK2zocjJTgmR+J7BJQl6zbZFwij0xz/zQS301rxkhidAxJBYnOKLa5cSPdNG3MSkYHt7mh6tDa3UMxUBozkfPPGaXm1uGI9B6DS2t7dI96kqOWAwCaje2YZ3eYfKryTl40cggsoyD6U1pKbi0lSFZRtgmW3jz5kIpjLaoMle1EnIPcA1A8cZ7qKuzLxg19QiU46ZwOxrtWmt1/CExSqWitjK7ME7mni4oY0hfua6JcUCh2wp1s+tcNwfQUOEppyzAdzmpSKsq6/dlC0CbhIzBiVPG3Hb86ExXcz3SMW6hx5VxxnPFENTBlkSYksSOfpUE8QitIZF5Yn9O9YindA8kkh8d1LbuyS5478YI5qwLltmDguTj5U+01W4jsDaiKORiwO8rk0X0jTI3Aub4HrO3lXGDmj+N1QDersCWOlXw1AZgwoJOe4x6VqrPTIbG23yRdaVud4PA+GKv/YXTprYjlzlyW5q7BDDp21ZlaV2Oc+i1uEVF2TJKU0DrLTPtKqzWWOTlCeD86Jb47eMRvHtIH4Bxn2qrda5bRzGG33Gc5B29gaqQXFxc7trBIQDukk9fkM0RSsE1XYQgCXEx2BcrnB3etVZNP67XEd2QmzBBX8fzqqZ1toC2nAmf1yM5plhcyRDdeTGac89FOfoTWgblyDLiwgS72KWTBwMZpnFtNtQdQf1CtBe3CDpT3iqkkgOxYhyo+dVI7Oyl3lZy8gHIU4bPxodV0F5kuTkepu0EkchAR8LtHpUNg3ReeIMDyDle1PnsmMmyJjuUZ3Y4qvbrNFLKssYD4Ayo+9WZdm8apHdT8zbgmcgZb3oesfVnRG9WAJondIrblMoaQ4wn3cD1HxqpBGEuWZiAx4C0ts5GVP4hnep3KzYJHB9qqyylfunOKh63m7EnPamSyEHnj1piuAPsTXbDuDXDcjHJNVJZfNURkP9VQuy6br2GaVDjMVPcUqhOSqCa7k0qVDYdD1JpYpUqohHcf5Y/wBQrk4zZw/IV2lVx7A5ybREDajEp7VqoWImCjgyd29e9KlR30LrsKrykVwPK4447H50y9YyOu/ncB9KVKgoZa4A8j9K9SKJVSMAnAHc1WnneKG5hjwE3kfTvSpUSAGXQ3Ub2ZFEEREasmCUGD+dVdIupoo32NjnHalSo/oXfYc1G/nt7K3ZNp3OVO5c8YzVOylaW4DsFDMvcDBFdpUv7GfQRC4Utk5QHFdiYpIduPug9qVKiejPsozWsd3duZS2cbsj3oFcMYwWHLZ4Y9xzSpUv/YOuiaTPGSTkkVHOSrAD2pUqKujBCxOKYxOK7Sqi0Qnk80qVKoWf/9k="
      }
    ]
  }
]
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding:20
  },
  container2: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color:"black",
    fontWeight:'bold',
    fontSize:20,
    padding:20
  },
  image: {
    width: 300,
    height: 100,
    flexWrap:"wrap",
    alignItems:"flex-start",
    alignSelf:"center"

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
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});