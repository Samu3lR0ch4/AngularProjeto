import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Verifica se estamos no browser
  if (typeof window === 'undefined') {
    console.warn("NÃO estamos no navegador. Bloqueando por segurança.");
    return false;
  }

  const email = sessionStorage.getItem("email");

  if (!email) {
    alert("Usuário fora de autenticação!");
    router.navigate([""]);
    return false;
  }

  return true;
};
