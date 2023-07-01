interface HomeSection1 {
  button1_en: string
  button1_fa: string
  button2_en: string
  button2_fa: string
  image1: string
  text1_en: string
  text1_fa: string
  text2_en:string
  text2_fa: string
  title1_en: string
  title1_fa: string
  title2_en: string
  title2_fa: string
}

export interface Home {
  section1: HomeSection1
  section2: {}
  section3: {}
  section4: {}
  section5: {}
  section6: {}
  section7: {}
  section8: {}
}
export interface ApiResponse<T> {
    _id: string
    home: Home
  }