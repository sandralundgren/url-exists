import test      from 'ava';
import urlExists from '../index';

test('succeds 1', async t => {
  const value = await urlExists('https://www.google.com');
  t.true(value);
});

test('succeds 2', async t => {
  const value = await urlExists('https://google.com');
  t.true(value);
});

test('succeds 3', async t => {
  const value = await urlExists('http://www.google.com');
  t.true(value);
});

test('fails 1', async t => {
  const value = await urlExists('http://ddcxbcbcbg.fake');
  t.false(value);
});

test('fails 2', async t => {
  const value = await urlExists('unicorn');
  t.false(value);
});
