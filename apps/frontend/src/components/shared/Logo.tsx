import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" height={60} width={60} alt="Gamer Store logo" />
      <Image src="/logo-name.png" width={230} height={0} alt="Gamer Store logo" />
    </Link>
  )
}
