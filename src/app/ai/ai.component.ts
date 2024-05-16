import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css'
})
export class AiComponent {
  currentIndex = 0;
  imageContainers: any;

  constructor() { }
  images = [
    { src: '../../assets/game.jpg',title:'Personalized Virtual Environment Developments', description: 'Ai analyzes user preferences and behaviors to Tailor immersive Digital Spaces , These Virtual worlds adapt in Real Time , Ensuring a unique Experience for each users. AI Algorithms personalized everything , from landscapes to nPCs, Making interactions more engaging and lifelike.The results is a dynamic metaverse that caters to individual tastes , Enriching the users journey through a truly personalized digital realm.' },
    { src: '../../assets/robot.jpg',title:'Real-Time Language Translation with AI', description: 'Real-time language translation enables instant communication across language barriers. With the help of advanced AI algorithms, it becomes easier to accurately interpret spoken or written words and facilitate seamless interactions globally. It bridges linguistic gaps and fosters cross-cultural understanding during travel & business meetings. AI-driven translation facility empowers a connected world, making communication effortless.' },
    { src: '../../assets/nft.jpg', title:'AI -Based NFT Generators', description: 'Our top -Notch AI-based NFT generator allows users to create stunning digital artworks to sell them as NFTs . Moreover , our AI-Powered Nft Generators requires no coding , Possesses cross - Device compatibility , allows bulk creation , comes with unique creation tools and allows the creation of NFT art with style transfer . In addiction to this , We offer text-to-image AI-NFT Generators allowing users to crate artworks from just text prompts.' },
    { src: '../../assets/super.jpg', title:'AI - drives Sales System', description: 'Our AI-Driven sales systems leverages intelligent algorithms to analyze customer preferences , Purchases History and Behavior Patterns , Enabling Personalized Product recommendations and Tailored Offers . This ensures that your customers find the perfect products that resonate with their unique tastes , Enhancing their overall shopping experience.' },
    { src: '../../assets/men.jpg', title:'Creating AI - Based Personal Avatars', description: 'Creating Personalized AI Avatars allows Users To Craft Virtual Representations Of Themselves , Enriched By AI Technology . These  Avators are Capable of learning From User Interactions , Mimicking Personalized Personalized and Behaviors , And Delivering Authentic Experience In The Virtual world .Personalized And Dynamic Adaptability Enhance User Engagement , Making AI -Driven Avators a Compelling Part of the Metaverse.' },
  ];

  ngAfterViewInit(): void {
    this.imageContainers = this.imageContainer.nativeElement.querySelectorAll('.first-image');
  }

  scrollLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToCurrentIndex();
    }
  }

  scrollRight(): void {
    if (this.currentIndex < this.imageContainers.length - 1) {
      this.currentIndex++;
      this.scrollToCurrentIndex();
    }
  }

  showContentIndex: number = 0;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  scrollToCurrentIndex(): void {
    const containerWidth = this.imageContainer.nativeElement.clientWidth;
    this.imageContainer.nativeElement.scrollTo({
      left: containerWidth * this.currentIndex,
      behavior: 'smooth'
    });
  }


  showContent(index: number): void {
    this.showContentIndex = index;
  }

  hideContent(index: number): void {
    if (this.showContentIndex === index) {
      this.showContentIndex = 0;
    }
  }

  @ViewChild('boxesContainer') boxesContainer!: ElementRef;

  checkboxHandler(): void {
    const boxes = this.boxesContainer.nativeElement.querySelectorAll('.hai');
    const triggerBottom = window.innerHeight / 5 * 4;
       
    if (this.boxesContainer) {
      const nativeElement = this.boxesContainer.nativeElement;
     
  }

    boxes.forEach((hai: HTMLElement) => {
      const boxTop = hai.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        hai.classList.add('show');
      } else {
        hai.classList.remove('show');
      }
    });
  }

  showInfo: boolean = false;


  showInfo1: boolean = false;

  showInfo2: boolean = false;

  showInfo3: boolean = false;
  showInfo4: boolean = false;
  showInfo5: boolean = false;
}
