import {chromium, expect, test} from '@playwright/test'

test('navigates to jacksonpollockii.com', async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  // TODO: change to production url when app is in production
  await page.goto('http://localhost:5173/')
  await page.getByRole('button', {name: 'Fun'}).click()
  await page.getByText('Paint Like Jackson Pollock').click()

  await expect(page).toHaveTitle(
    'Jackson Pollock II | Move Mouse to Draw | Click to Change Color',
  )
})

test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/')

  // Click the get started link.
  await page.getByRole('link', {name: 'Get started'}).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/)
})
