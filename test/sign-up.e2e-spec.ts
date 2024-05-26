import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('shopview@example.com')
  await page.getByLabel('Nome do estabelecimento').fill('Shop View')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Número do estabelecimento').fill('99999999999')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Estabelecimento cadastrado com sucesso!')

  expect(toast).toBeVisible()
})

test('check if email is correct', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('invalidEmail')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const errorMessage = page.getByText('Insira um e-mail válido')

  expect(errorMessage).toBeVisible()
})

test('throw error if email is not passed', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const errorMessage = page.getByText('O nome do estabelecimento é obrigatório')

  expect(errorMessage).toBeVisible()
})

test('throw error if manager name is not passed', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const errorMessage = page.getByText('O e-mail é obrigatório')

  expect(errorMessage).toBeVisible()
})

test('throw error if name is not passed', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const errorMessage = page.getByText('O nome é obrigatório')

  expect(errorMessage).toBeVisible()
})

test('throw error if number is not passed', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const errorMessage = page.getByText('O número é obrigatório')

  expect(errorMessage).toBeVisible()
})

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
