import React from 'react'
import Gallery from '@/components/gallery/Gallery';


export const metadata = {
  title: "Our Gallery | Najah Family Childcare",
  description: "View our gallery of images showcasing the fun and learning experiences at Najah Family Childcare.",
};

const page = () => {
  return (
    <div>
      <Gallery />
    </div>
  )
}

export default page