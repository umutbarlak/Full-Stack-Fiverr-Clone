import { ICategory, IInfo, IInput } from "../types";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenFancy,
  FaVideo,
  FaRobot,
  FaMusic,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

export const categories: ICategory[] = [
  { name: "Programlama ve Teknoloji", icon: FaCode },
  { name: "Grafik ve Tasarım", icon: FaPaintBrush },
  { name: "Dijital Pazarlama", icon: FaBullhorn },
  { name: "Yazma ve Çeviri", icon: FaPenFancy },
  { name: "Video ve Animasyon", icon: FaVideo },
  { name: "Yapay Zeka Hizmetleri", icon: FaRobot },
  { name: "Müzik ve Ses", icon: FaMusic },
  { name: "İş", icon: FaBriefcase },
  { name: "Danışmanlık", icon: FaUserTie },
];

export const items: IInfo[] = [
  {
    title: "Uzman işe alım danışmanları",
    text: "Doğru yeteneği bulmanız ve projenizin her ihtiyacını karşılamanız için bir hesap yöneticisine güvenin.",
  },
  {
    title: "Memnuniyet garantisi",
    text: "Eksik teslimatlar için garantili iade ile güvenle sipariş verin.",
  },
  {
    title: "Gelişmiş yönetim araçları",
    text: "Serbest çalışanları ekibinize ve projelerinize sorunsuz bir şekilde entegre edin.",
  },
  {
    title: "Esnek ödeme modelleri",
    text: "Proje başına ödeme yapın veya daha uzun süreli işbirlikleri için saatlik ücret seçeneklerini tercih edin.",
  },
];

export const inputs: IInput[] = [
  {
    label: "Başlık",
    name: "title",
    required: true,
  },
  {
    label: "Kapak Fotoğrafı",
    name: "coverImage",
    required: true,
    type: "file",
  },
  {
    label: "Fotoğraflar",
    name: "images",
    required: true,
    type: "file",
    multiple: true,
  },
  {
    label: "Revizyon Sayısı",
    name: "package_revisions",
    required: true,
    type: "number",
    min: 1,
  },
  {
    label: "Özellikler (',' ile ayırınız)",
    name: "package_features",
    required: true,
    type: "textarea",
  },
  {
    label: "Açıklama",
    name: "description",
    required: true,
    type: "textarea",
  },
  {
    label: "Paket Açıklaması",
    name: "package_description",
    required: true,
  },
  {
    label: "Paket Başlığı",
    name: "package_title",
    required: true,
  },
  {
    label: "Teslimat Süresi (gün)",
    name: "package_duration",
    required: true,
    type: "number",
    min: 1,
    max: 90,
  },
  {
    label: "Fiyat ($)",
    name: "package_price",
    type: "number",
    required: true,
    min: 1,
  },
];
