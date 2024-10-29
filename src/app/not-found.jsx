import { buttonVariants } from '@/components/ui/button'
import Section from '@/components/ui/section'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Section className="text-center">
      <h1 className='h2'>Not Found</h1>
      <p className='my-base'>Could not find requested resource</p>
      <Link className={buttonVariants({variant:"secondary"})} href="/">Return Home</Link>
    </Section>
  )
}