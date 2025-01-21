import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

const blogContent = {
  smiling: { image: '/smiling.png', title: 'Smiling Blog Content' },
  young: { image: '/young.png', title: 'Young Blog Content' },
  beach: { image: '/beach.png', title: 'Beach Blog Content' },
  yoga: { image: '/yoga.png', title: 'Yoga Blog Content' },
  cycle: { image: '/cycle.png', title: 'Cycle Blog Content' },
  ear: { image: '/ear1big.png', title: 'Ear Blog Content' },
};

export default function FullContentPage() {
  const { id } = useParams();
  const content = blogContent[id];

  return (
    <div className="mx-6 md:mx-[50px] lg:mx-[100px] xl:mx-[200px] my-10">
      {/* <h1 className="text-[32px] font-medium text-[#1B1B1F]">{content?.title}</h1> */}
      <h1 className='text-[28px] md:text-[32px] lg:text-[40px] font-medium text-[#1B1B1F]'>Uncontrolled diabetes increases risk of hearing loss; doctors call for more awareness, screening Premium</h1>
      <div className='flex justify-between flex-col md:flex-row my-4 md:m-4 gap-2'>
        
             <div>
                 <p className='text-[#757575] text-[16px] md:text-[24px] '>Posted at 22-11-2024</p>
             </div>
             <div>
                 <button className='flex bg-[#EAEAEA] text-[16px] md:text-[20px] font-normal px-2 md:px-4 py-2  '><span><CgWebsite className='m-1' /></span> Go to Source</button>
             </div>

         </div>
      <div className="my-4">
        <img src={content?.image} alt={id} className="w-full" />
      </div>
      <p className="text-base md:text-lg font-semibold text-[#1B1B1F] leading-7 my-3">
        {/* Add specific content here */}
        {`This is detailed content about ${content?.title}.`}
      </p>
             <p className='text-base md:text-lg text-[#1B1B1F] leading-7'>Uncontrolled diabetes increases the risk of hearing loss due to the damage high blood sugar causes to blood vessels and nerves essential for hearing. Despite this, hearing health is rarely prioritised in diabetes care, but now, doctors are calling for the government to recognise and include hearing screening in routine diabetes care.</p>
             <p className='text-base md:text-lg text-[#1B1B1F] my-4 leading-7'>Stating that access to holistic diabetes care is crucial to address the overlooked link between diabetes and hearing loss, a condition affecting several diabetics worldwide, Rajesh Kesari, executive council member, Research Society for Study of Diabetes in India, Delhi Chapter, says that there is a close relationship between diabetes and hearing loss. Hearing loss occurs twice as frequently in patients with uncontrolled diabetes as compared to the non-diabetic population, he adds.</p>
             <p className='text-base md:text-lg text-[#1B1B1F] leading-7'>Dr. Kesari explains that people with high sugar levels frequently have dryness in their ears, frequent infections, both fungal and bacterial infections etc. “It is important for people with diabetes to keep their blood sugar under control because it has implications not only for other vital organ systems like the heart, blood vessels, kidneys, eyes and legs, but it is also very important to preserve our hearing and maintain our balance,” he says.</p>
             <p className='text-base md:text-lg text-[#1B1B1F] my-4 leading-7'>“Diabetic neuropathy and nerve damage is a well-known complication of diabetes, so it can affect nerve signals from the inner ear to the brain, causing hearing loss. Diabetes is a metabolic vascular dysfunction of the whole body, which includes the inner ear, and so, hearing loss can increase as far as age is concerned as well. It is however, a much -ignored symptom,” says Anil Gomber, senior consultant, internal medicine and diabetology, Apollo Spectra Hospital.</p>
             <p className='text-base md:text-lg text-[#1B1B1F] leading-7'>Anoop Misra, endocrinologist and director at Fortis C-Doc, adds: “One established problem in diabetics is that they get more ear infections if their diabetes is uncontrolled.’’</p>
             <p className='text-base md:text-lg text-[#1B1B1F] my-4 leading-7'>The World Health Organization (WHO) also notes that while the exact mechanism that links diabetes to hearing loss is unknown, it is possible that high or low blood sugar levels damage the nerves and small blood vessels in the inner ear. This can impact how nerve signals travel from the inner ear to the brain, leading to hearing loss.</p>
    </div>
  );
}
