// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Button isIconOnly onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {
        theme == 'dark' ? <IconSunFilled class="" /> : <IconMoonFilled />
      }
    </Button>
  )
};