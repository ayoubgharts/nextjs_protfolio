// pages/tutorials.js
import Link from "next/link";
import Image from "next/image";
import styles from "./tutorials.module.css";

import { Container } from "react-bootstrap";

import SectionTitle from "@/components/buttons/section-title/SectionTitle";

export default function Tutorials() {
  return (
    <main className={styles.tutorials}>
      <Container>
        <SectionTitle textContent={"MORAQIB mark I"} />

        <div className={styles.imageWrapper}>
          <Image
            src="/pics/MORAQIBmarki.png"
            alt="MORAQIB mark I overview"
            width={1024}
            height={920}
            className={styles.image}
          />
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.partsTable}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Part</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microcontroller</td>
                <td>Arduino Nano (3.3 V)</td>
                <td>
                  Or Pro Mini. Needs enough UART/soft‑serial for GPS, BP sensor,
                  optional GSR.
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>NEO‑6M GPS module</td>
                <td>
                  Cheap breakout boards available. Requires clear sky view. (
                  <a
                    href="https://randomnerdtutorials.com/guide-to-neo-6m-gps-module-with-arduino/?utm_source=chatgpt.com"
                    target="_blank"
                  >
                    Random Nerd Tutorials
                  </a>
                  ).
                </td>
              </tr>
              <tr>
                <td>Heart Rate</td>
                <td>PulseSensor Amped (or MAX30102 module)</td>
                <td>
                  PulseSensor Playground library. PPG at fingertip/wrist. (
                  <a
                    href="https://pulsesensor.com/pages/code-and-guide?utm_source=chatgpt.com"
                    target="_blank"
                  >
                    PulseSensor
                  </a>
                  ,
                  <a
                    href="https://www.sparkfun.com/pulse-sensor.html?utm_source=chatgpt.com"
                    target="_blank"
                  >
                    SparkFun
                  </a>
                  ).
                </td>
              </tr>
              <tr>
                <td>Blood Pressure</td>
                <td>
                  – Small air pump (e.g. 5 V mini pump)
                  <br />– Solenoid valve
                </td>
                <td>
                  – Differential pressure sensor AMS 5915, Range ≈ 0–350 mbar
                  for 0–262 mmHg. (
                  <a
                    href="https://www.analog-micro.com/products/pressure-sensors/board-mount-pressure-sensors/ams5915/ams5915-an03.pdf?utm_source=chatgpt.com"
                    target="_blank"
                  >
                    Analog Microelectronics PDF
                  </a>
                  ).
                </td>
              </tr>
              <tr>
                <td>Optional Skin Conductance</td>
                <td>GSR sensor module</td>
                <td>Uses two electrodes on skin.</td>
              </tr>
              <tr>
                <td>Power</td>
                <td>3.7 V Li‑Po + TP4056 charger/regulator</td>
                <td>Provide 5 V for pump/GPS, 3.3 V for MCU.</td>
              </tr>
              <tr>
                <td>Enclosure & Assembly</td>
                <td>Breadboard/PCB, wires, wrist strap, cuff</td>
                <td>Custom 3D‑printed or off‑the‑shelf wrist‑cuff.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.project}>
          <h3>1. تحديد المواصفات والمتطلبات</h3>
          <ul>
            <li>نضام تحديد المواقع (GPS)</li>
            <li>اتصال خلوي (GSM/3G/4G/5G)</li>
            <li>حسّاسات كشف محاولات إزالة أو قصّ السوار</li>
            <li>عمر البطارية، مقاومة الماء والصدمات</li>
            <li>الامتثال لمعايير الأمان والقانون (CNDP - المغرب)</li>
          </ul>

          <h3>2. تصميم العتاد الإلكتروني (Hardware Design)</h3>
          <ul>
            <li>اختيار المعالج الصغير لإدارة الاتصالات وقراءة المستشعرات</li>
            <li>دمج GPS ومودم GSM</li>
            <li>إضافة مستشعرات تسارع وكشف قطع الأسلاك</li>
            <li>تصميم PCB مدمج مقاوم للتلاعب</li>
          </ul>

          <h3>3. تصميم الغلاف والحافظة</h3>
          <ul>
            <li>مواد مقاومة للصدمات (ABS، بولي كربونات، سبائك خفيفة)</li>
            <li>حزام سيليكون مريح ومضاد للماء</li>
            <li>آلية قفل لا تُفتح إلا بأدوات خاصة</li>
          </ul>

          <h3>4. تطوير البرمجيّات</h3>
          <ul>
            <li>Firmware مدمج لقراءة البيانات وإرسالها للخادم</li>
            <li>خادم يعالج البيانات، التنبيهات، وتتبع الموقع</li>
            <li>واجهة Web/Mobile للمراقبة في الوقت الحقيقي</li>
          </ul>

          <h3>5. النمذجة الأولية والاختبار</h3>
          <ul>
            <li>نموذج أولي باستخدام الطباعة ثلاثية الأبعاد</li>
            <li>اختبارات GPS والاتصال في بيئات مختلفة</li>
            <li>اختبارات مقاومة الماء (IP67/IP68) والصدمات</li>
          </ul>

          <h3>6. التصنيع والإنتاج على نطاق واسع</h3>
          <ul>
            <li>تصنيع المكونات وتجميعها عبر شركاء موثوقين</li>
            <li>اختبارات تلقائية للدارات (AOI)</li>
            <li>تركيب الغلاف وربط الحزام واختبارات الجودة النهائية</li>
          </ul>

          <h3>7. التوثيق والتصديق النهائي</h3>
          <ul>
            <li>شهادات المطابقة (CE أو حسب المتطلبات المحلية)</li>
            <li>إعداد دليل المستخدم وبيانات المنتج</li>
          </ul>

          <h3>8. التوزيع والتركيب الميداني</h3>
          <ul>
            <li>تركيب الأجهزة وضبط إعداداتها وربطها بمراكز التحكم</li>
            <li>تدريب الفرق على قراءة التقارير والتعامل مع الإنذارات</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
